// Global State
let questions = [];
let currentQuestionIndex = 0;
let answers = {}; // mapping original question index -> selected option original index
let timeLeft = 0; // 60 minutes or 20 minutes
let timerInterval = null;
let isSubmitted = false;
let quizMode = null;

// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const timerEl = document.getElementById('timer');
const progressBarEl = document.getElementById('progress-bar');
const answeredCountEl = document.getElementById('answered-count');
const totalCountEl = document.getElementById('total-count');
const questionGridEl = document.getElementById('question-grid');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnSubmit = document.getElementById('btn-submit');
const btnRetry = document.getElementById('btn-retry');

const startScreenEl = document.getElementById('start-screen');
const quizWrapperEl = document.getElementById('quiz-wrapper');
const btnMode20 = document.getElementById('btn-mode-20');
const btnModeAll = document.getElementById('btn-mode-all');

// Utility to shuffle an array
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Initialize application
function initApp() {
    loadTheme();
    loadState();
    
    // Event Listeners
    themeToggleBtn.addEventListener('click', toggleTheme);
    btnPrev.addEventListener('click', goPrev);
    btnNext.addEventListener('click', goNext);
    btnSubmit.addEventListener('click', submitQuiz);
    btnRetry.addEventListener('click', retryQuiz);
    
    btnMode20.addEventListener('click', () => startNewQuiz('20'));
    btnModeAll.addEventListener('click', () => startNewQuiz('all'));
    
    if (questions.length === 0) {
        // No active quiz
        startScreenEl.style.display = 'flex';
        quizWrapperEl.style.display = 'none';
    } else {
        // Active quiz found
        startScreenEl.style.display = 'none';
        quizWrapperEl.style.display = 'flex';
        
        if (isSubmitted) {
            showResults();
        } else {
            renderGrid();
            renderQuestion();
            startTimer();
        }
    }
}

function startNewQuiz(mode) {
    quizMode = mode;
    timeLeft = mode === '20' ? 20 * 60 : 60 * 60; // 20 mins for 20q, 60 mins for all
    prepareQuestions(mode);
    saveState();
    
    startScreenEl.style.display = 'none';
    quizWrapperEl.style.display = 'flex';
    
    renderGrid();
    renderQuestion();
    startTimer();
}

// Prepare and shuffle questions and options
function prepareQuestions(mode) {
    // quizData is defined in data.js
    let rawQuestions = quizData.map((q, index) => {
        // Strip the A., B., C., D. prefix for cleaner display when shuffled
        let cleanOptions = q.options.map(opt => opt.replace(/^[A-D]\.\s*/, ''));
        
        let opts = cleanOptions.map((optText, optIdx) => ({
            text: optText,
            originalIndex: optIdx
        }));
        
        return {
            originalIndex: index,
            question: q.question,
            options: shuffleArray(opts),
            correctIndex: q.answer,
            explanation: q.explanation
        };
    });
    
    let shuffled = shuffleArray(rawQuestions);
    if (mode === '20') {
        questions = shuffled.slice(0, 20);
    } else {
        questions = shuffled;
    }
}

// State management
function saveState() {
    if (isSubmitted) {
        localStorage.removeItem('quizState');
        return;
    }
    const state = {
        questions,
        currentQuestionIndex,
        answers,
        timeLeft,
        isSubmitted,
        quizMode
    };
    localStorage.setItem('quizState', JSON.stringify(state));
}

function loadState() {
    const savedState = localStorage.getItem('quizState');
    if (savedState) {
        const state = JSON.parse(savedState);
        questions = state.questions || [];
        currentQuestionIndex = state.currentQuestionIndex || 0;
        answers = state.answers || {};
        timeLeft = state.timeLeft || 0;
        isSubmitted = state.isSubmitted || false;
        quizMode = state.quizMode || null;
    }
}

// Theme management
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Timer
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        } else {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft % 10 === 0) saveState(); // periodically save time
        }
    }, 1000);
}

function updateTimerDisplay() {
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    timerEl.textContent = `${m}:${s}`;
    if (timeLeft < 300) { // less than 5 mins
        timerEl.style.color = 'var(--danger-color)';
    } else {
        timerEl.style.color = '';
    }
}

// Rendering UI
function renderGrid() {
    questionGridEl.innerHTML = '';
    totalCountEl.textContent = questions.length;
    let answeredCount = 0;
    
    questions.forEach((q, idx) => {
        const btn = document.createElement('div');
        btn.classList.add('grid-item');
        btn.textContent = idx + 1;
        
        if (answers[q.originalIndex] !== undefined) {
            btn.classList.add('answered');
            answeredCount++;
        }
        if (idx === currentQuestionIndex) {
            btn.classList.add('active');
        }
        
        btn.addEventListener('click', () => {
            currentQuestionIndex = idx;
            renderQuestion();
            renderGrid(); // update active class
            saveState();
        });
        
        questionGridEl.appendChild(btn);
    });
    
    answeredCountEl.textContent = answeredCount;
    progressBarEl.style.width = `${(answeredCount / questions.length) * 100}%`;
}

function renderQuestion() {
    const q = questions[currentQuestionIndex];
    questionNumberEl.textContent = `Câu ${currentQuestionIndex + 1}`;
    questionTextEl.textContent = q.question;
    
    optionsContainer.innerHTML = '';
    const prefixes = ['A', 'B', 'C', 'D'];
    
    q.options.forEach((opt, idx) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        if (answers[q.originalIndex] === opt.originalIndex) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.innerHTML = `
            <div class="option-text"><strong>${prefixes[idx]}.</strong> ${opt.text}</div>
        `;
        
        optionDiv.addEventListener('click', () => {
            answers[q.originalIndex] = opt.originalIndex;
            renderQuestion();
            renderGrid();
            saveState();
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Update controls
    btnPrev.disabled = currentQuestionIndex === 0;
    if (currentQuestionIndex === questions.length - 1) {
        btnNext.style.display = 'none';
        btnSubmit.style.display = 'block';
    } else {
        btnNext.style.display = 'block';
        btnSubmit.style.display = 'none';
    }
}

// Navigation
function goPrev() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        renderGrid();
        saveState();
    }
}

function goNext() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
        renderGrid();
        saveState();
    }
}

// Submission and Results
function submitQuiz() {
    const answered = Object.keys(answers).length;
    if (answered < questions.length && timeLeft > 0) {
        if (!confirm(`Bạn mới làm ${answered}/${questions.length} câu. Bạn có chắc chắn muốn nộp bài?`)) {
            return;
        }
    }
    
    clearInterval(timerInterval);
    isSubmitted = true;
    saveState();
    showResults();
}

function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'flex';
    document.querySelector('.controls').style.display = 'none'; // hide in review if any
    
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;
    
    questions.forEach(q => {
        const userAns = answers[q.originalIndex];
        if (userAns === undefined) {
            unattempted++;
        } else if (userAns === q.correctIndex) {
            correct++;
        } else {
            incorrect++;
        }
    });
    
    document.getElementById('score-text').textContent = `${correct}/${questions.length}`;
    document.getElementById('correct-count').textContent = correct;
    document.getElementById('incorrect-count').textContent = incorrect;
    document.getElementById('unattempted-count').textContent = unattempted;
    
    // Update grid for review
    updateGridForReview();
    
    // Render review section based on mode
    if (quizMode === 'all') {
        document.getElementById('review-section').style.display = 'flex';
        renderReviewSection();
    } else {
        document.getElementById('review-section').style.display = 'none';
    }
}

function updateGridForReview() {
    const gridItems = questionGridEl.children;
    questions.forEach((q, idx) => {
        const btn = gridItems[idx];
        btn.className = 'grid-item'; // reset
        const userAns = answers[q.originalIndex];
        if (userAns === q.correctIndex) {
            btn.classList.add('correct-nav');
        } else if (userAns !== undefined) {
            btn.classList.add('incorrect-nav');
        }
        
        btn.addEventListener('click', () => {
            const el = document.getElementById(`review-q-${idx}`);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
}

function renderReviewSection() {
    const reviewSec = document.getElementById('review-section');
    reviewSec.innerHTML = '';
    const prefixes = ['A', 'B', 'C', 'D'];
    
    questions.forEach((q, idx) => {
        const item = document.createElement('div');
        item.classList.add('review-item');
        item.id = `review-q-${idx}`;
        
        let html = `<div class="review-question">Câu ${idx + 1}: ${q.question}</div>`;
        html += `<div class="review-options">`;
        
        q.options.forEach((opt, optIdx) => {
            let classes = ['review-option'];
            const userAns = answers[q.originalIndex];
            
            if (opt.originalIndex === q.correctIndex) {
                classes.push('correct');
            } else if (userAns === opt.originalIndex) {
                classes.push('wrong');
            }
            
            html += `<div class="${classes.join(' ')}"><strong>${prefixes[optIdx]}.</strong> ${opt.text}</div>`;
        });
        
        html += `</div>`;
        
        if (q.explanation) {
            html += `<div class="explanation"><strong>Giải thích:</strong> ${q.explanation}</div>`;
        }
        
        item.innerHTML = html;
        reviewSec.appendChild(item);
    });
}

function retryQuiz() {
    if(confirm('Bạn có chắc chắn muốn làm lại từ đầu? Toàn bộ tiến trình sẽ bị xóa.')) {
        localStorage.removeItem('quizState');
        location.reload();
    }
}

// Start app
document.addEventListener('DOMContentLoaded', initApp);
