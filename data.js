const quizData = [
  {
    "question": "Địa chỉ IP phiên bản 4 (IPv4) có độ dài bao nhiêu byte?",
    "options": [
      "A. 2 byte",
      "B. 4 byte",
      "C. 8 byte",
      "D. 16 byte"
    ],
    "answer": 1,
    "explanation": "Theo tài liệu, IPv4 có độ dài 4 byte (thường kí hiệu là 4 số nguyên phân cách bởi dấu chấm)."
  },
  {
    "question": "Địa chỉ IP phiên bản 6 (IPv6) có độ dài bao nhiêu byte?",
    "options": [
      "A. 4 byte",
      "B. 8 byte",
      "C. 16 byte",
      "D. 32 byte"
    ],
    "answer": 2,
    "explanation": "Địa chỉ IPv6 được cấu tạo với độ dài 16 byte để khắc phục tình trạng cạn kiệt địa chỉ IPv4."
  },
  {
    "question": "Hệ thống nào được sử dụng để ánh xạ giữa tên miền (hostname) và địa chỉ IP?",
    "options": [
      "A. DHCP",
      "B. DNS",
      "C. TCP",
      "D. UDP"
    ],
    "answer": 1,
    "explanation": "Hệ thống DNS (Domain Name System) chuyển đổi địa chỉ IP dạng số thành các tên máy (hostname) dễ nhớ đối với con người."
  },
  {
    "question": "Trong Java, lớp nào là biểu diễn bậc cao của địa chỉ IP, bao gồm cả IPv4 và IPv6?",
    "options": [
      "A. java.net.Socket",
      "B. java.net.NetworkInterface",
      "C. java.net.InetAddress",
      "D. java.net.ServerSocket"
    ],
    "answer": 2,
    "explanation": "InetAddress là lớp đại diện cho địa chỉ IP, cung cấp thông tin về hostname và địa chỉ mạng."
  },
  {
    "question": "Để khởi tạo một đối tượng InetAddress qua tên miền (hostname), phương thức static nào thường được sử dụng nhất?",
    "options": [
      "A. getLocalHost()",
      "B. getByAddress()",
      "C. getAllByName()",
      "D. getByName()"
    ],
    "answer": 3,
    "explanation": "Phương thức InetAddress.getByName(String host) thường được dùng để gọi máy chủ DNS và lấy đối tượng InetAddress tương ứng."
  },
  {
    "question": "Nếu một hostname trỏ tới nhiều địa chỉ IP, phương thức nào được dùng để lấy tất cả các địa chỉ này?",
    "options": [
      "A. getAllByName()",
      "B. getByAddress()",
      "C. getHostName()",
      "D. getLocalHost()"
    ],
    "answer": 0,
    "explanation": "Phương thức getAllByName() trả về một mảng các đối tượng InetAddress chứa toàn bộ máy chủ tương ứng."
  },
  {
    "question": "Nếu máy tính không có kết nối Internet và IP tĩnh, phương thức getLocalHost() sẽ trả về địa chỉ IP mặc định nào?",
    "options": [
      "A. 0.0.0.0",
      "B. 127.0.0.1",
      "C. 255.255.255.255",
      "D. 192.168.1.1"
    ],
    "answer": 1,
    "explanation": "Khi không lấy được IP mạng, máy tự động trả về địa chỉ loopback tương ứng là 127.0.0.1."
  },
  {
    "question": "Với kết quả tra cứu DNS không tìm thấy (lỗi), lớp InetAddress sẽ lưu trữ kết quả này trong bộ nhớ đệm (cache) mặc định bao lâu?",
    "options": [
      "A. 0 giây",
      "B. 5 giây",
      "C. 10 giây",
      "D. Lưu vô thời hạn"
    ],
    "answer": 2,
    "explanation": "Theo tài liệu, với những kết quả không tốt (không tìm thấy host), InetAddress sẽ lưu giữ kết quả này trong 10 giây."
  },
  {
    "question": "Sự khác biệt lớn nhất giữa getCanonicalHostName() và getHostName() là gì?",
    "options": [
      "A. getCanonicalHostName() luôn trả về mảng byte.",
      "B. getCanonicalHostName() sẽ luôn gọi truy vấn DNS nếu có thể và thay thế kết quả cũ.",
      "C. getCanonicalHostName() chạy nhanh hơn và không cần DNS.",
      "D. getHostName() không bao giờ gọi máy chủ DNS."
    ],
    "answer": 1,
    "explanation": "getCanonicalHostName() mạnh hơn vì nó chủ động gọi DNS và có thể thay thế kết quả trước đó về việc tìm hostname, trong khi getHostName() chỉ gọi khi không chắc chắn."
  },
  {
    "question": "Phương thức getAddress() của lớp InetAddress trả về dữ liệu kiểu gì?",
    "options": [
      "A. int[]",
      "B. String",
      "C. char[]",
      "D. byte[]"
    ],
    "answer": 3,
    "explanation": "Phương thức này trả về một mảng kiểu byte biểu diễn địa chỉ IP của máy."
  },
  {
    "question": "Kiểu byte trong Java có phạm vi giá trị là bao nhiêu?",
    "options": [
      "A. Từ 0 đến 255",
      "B. Từ -128 đến 127",
      "C. Từ 0 đến 128",
      "D. Từ -256 đến 255"
    ],
    "answer": 1,
    "explanation": "Trong Java, kiểu byte có dấu với phạm vi từ -128 đến 127, khác với các ngôn ngữ như C."
  },
  {
    "question": "Địa chỉ nào sau đây thuộc khối địa chỉ multicast IPv4?",
    "options": [
      "A. 127.0.0.1",
      "B. 192.168.1.0 tới 192.168.1.255",
      "C. 224.0.0.0 tới 239.255.255.255",
      "D. 10.0.0.0 tới 10.255.255.255"
    ],
    "answer": 2,
    "explanation": "Địa chỉ IPv4 trong phạm vi 224.0.0.0 tới 239.255.255.255 là địa chỉ multicast, dùng để gửi thông điệp tới nhiều host cùng lúc."
  },
  {
    "question": "Phương thức isLoopbackAddress() của InetAddress dùng để làm gì?",
    "options": [
      "A. Kiểm tra xem địa chỉ IP có phải là địa chỉ localhost (ví dụ 127.0.0.1) hay không.",
      "B. Kiểm tra xem địa chỉ có khớp với bất kỳ mạng nào không.",
      "C. Kiểm tra xem host có kết nối được không.",
      "D. Kiểm tra xem địa chỉ là IPv4 hay IPv6."
    ],
    "answer": 0,
    "explanation": "isLoopbackAddress() trả về true nếu địa chỉ là loopback (localhost), phục vụ cho kiểm tra nội bộ máy."
  },
  {
    "question": "Để kiểm tra khả năng kết nối tới một nút mạng từ host hiện tại, ta sử dụng phương thức nào của InetAddress?",
    "options": [
      "A. ping()",
      "B. isReachable()",
      "C. isAnyLocalAddress()",
      "D. connect()"
    ],
    "answer": 1,
    "explanation": "isReachable() sử dụng công cụ truy vết để kiểm tra host có phản hồi trong thời gian timeout hay không."
  },
  {
    "question": "Lớp java.net.InetAddress kế thừa trực tiếp từ lớp nào?",
    "options": [
      "A. java.net.Socket",
      "B. java.io.Serializable",
      "C. java.lang.Object",
      "D. java.net.NetworkInterface"
    ],
    "answer": 2,
    "explanation": "Giống như các lớp cơ bản khác, InetAddress kế thừa trực tiếp từ java.lang.Object và override các hàm equals, hashCode, toString."
  },
  {
    "question": "Khi nào phương thức equals(Object o) của lớp InetAddress trả về giá trị true?",
    "options": [
      "A. Khi hai đối tượng có chung hostname nhưng khác IP.",
      "B. Khi hai đối tượng được tạo cùng thời điểm.",
      "C. Khi hai đối tượng trỏ tới cùng một địa chỉ IP.",
      "D. Khi hai đối tượng cùng loại IPv6."
    ],
    "answer": 2,
    "explanation": "Nếu hai object InetAddress có cùng địa chỉ IP thì được xem là bằng nhau, mặc dù hostname của chúng có thể khác nhau."
  },
  {
    "question": "Lớp NetworkInterface trong Java đại diện cho điều gì?",
    "options": [
      "A. Đại diện cho một luồng byte trong mạng.",
      "B. Đại diện cho giao diện mạng cục bộ vật lý hoặc ảo (như card Ethernet, Wifi).",
      "C. Đại diện cho một máy chủ tên miền (DNS Server).",
      "D. Đại diện cho cổng truyền thông của TCP."
    ],
    "answer": 1,
    "explanation": "Lớp NetworkInterface đại diện cho một địa chỉ IP cục bộ được gắn trên các thiết bị phần cứng như card mạng vật lý hoặc giao diện mạng ảo."
  },
  {
    "question": "Phương thức NetworkInterface.getNetworkInterfaces() trả về kiểu dữ liệu nào sau đây?",
    "options": [
      "A. Mảng các đối tượng InetAddress.",
      "B. Một danh sách List<String> chứa tên giao diện.",
      "C. Một đối tượng Enumeration<NetworkInterface>.",
      "D. Một Map chứa cặp cổng và IP."
    ],
    "answer": 2,
    "explanation": "Phương thức này trả về Enumeration<NetworkInterface> để liệt kê tất cả các giao diện mạng trên máy cục bộ."
  },
  {
    "question": "Tham số timeout trong hàm isReachable(int timeout) có đơn vị tính là gì?",
    "options": [
      "A. Giây",
      "B. Phút",
      "C. Mili giây",
      "D. Micro giây"
    ],
    "answer": 2,
    "explanation": "Phương thức sẽ trả về true nếu host phản hồi trong thời gian timeout tính bằng mili giây."
  },
  {
    "question": "Ngoại lệ nào thường xảy ra khi gọi phương thức InetAddress.getByName() với một tên miền không tồn tại?",
    "options": [
      "A. IOException",
      "B. SocketException",
      "C. NullPointerException",
      "D. UnknownHostException"
    ],
    "answer": 3,
    "explanation": "UnknownHostException được ném ra khi hệ thống DNS không thể phân giải được tên miền thành một địa chỉ IP."
  },
  {
    "question": "TCP trong mạng máy tính là viết tắt của cụm từ nào?",
    "options": [
      "A. Transfer Control Protocol",
      "B. Transmission Control Protocol",
      "C. Terminal Communication Protocol",
      "D. Telecommunication Control Protocol"
    ],
    "answer": 1,
    "explanation": "TCP (Transmission Control Protocol) là giao thức truyền thông cốt lõi cho phép giao tiếp tin cậy qua mạng IP."
  },
  {
    "question": "Số hiệu cổng (port number) trong giao tiếp có thể nhận giá trị trong khoảng nào?",
    "options": [
      "A. Từ 0 đến 1023",
      "B. Từ 0 đến 65535",
      "C. Từ 1024 đến 49151",
      "D. Từ 0 đến 255"
    ],
    "answer": 1,
    "explanation": "Số hiệu cổng được cấu thành từ 16 bit, do đó có giá trị nằm trong khoảng từ 0 đến 65535."
  },
  {
    "question": "Cổng hệ thống (well-known port) được dành riêng cho các quá trình của hệ thống nằm trong dải giá trị nào?",
    "options": [
      "A. Từ 0 đến 1023",
      "B. Từ 1024 đến 49151",
      "C. Từ 49152 đến 65535",
      "D. Từ 0 đến 65535"
    ],
    "answer": 0,
    "explanation": "Các cổng từ 0 đến 1023 là cổng hệ thống dành riêng cho các dịch vụ chuẩn như HTTP (80), FTP (21)."
  },
  {
    "question": "Dịch vụ Web giao thức HTTP thường lắng nghe mặc định ở cổng nào?",
    "options": [
      "A. 21",
      "B. 25",
      "C. 80",
      "D. 443"
    ],
    "answer": 2,
    "explanation": "Theo chuẩn mạng, cổng 80 được gán mặc định cho máy chủ cung cấp dịch vụ Web (HTTP)."
  },
  {
    "question": "Trong kiến trúc lập trình TCP của Java, lớp nào đóng vai trò như một đầu cuối (endpoint) để truyền nhận dữ liệu?",
    "options": [
      "A. Socket",
      "B. ServerSocket",
      "C. NetworkInterface",
      "D. DatagramSocket"
    ],
    "answer": 0,
    "explanation": "Socket đại diện cho một đầu cuối của một kết nối thực, dùng để gửi và nhận dữ liệu sau khi kết nối TCP được thiết lập."
  },
  {
    "question": "Phương thức getInputStream() của lớp Socket có tác dụng gì?",
    "options": [
      "A. Đẩy dữ liệu ra mạng cho máy nhận.",
      "B. Lấy dòng dữ liệu đầu vào (Input Stream) để đọc dữ liệu từ xa gửi tới.",
      "C. Bắt đầu lắng nghe các kết nối từ client.",
      "D. Mở cổng kết nối trên máy chủ."
    ],
    "answer": 1,
    "explanation": "Trả về dòng đầu vào (InputStream) của socket nhằm mục đích nhận luồng byte được máy tính đối tác gửi đến."
  },
  {
    "question": "Lớp nào chỉ được sử dụng trong lập trình TCP ở phía Server nhằm lắng nghe yêu cầu kết nối?",
    "options": [
      "A. Socket",
      "B. DatagramSocket",
      "C. ServerSocket",
      "D. InetAddress"
    ],
    "answer": 2,
    "explanation": "Lớp ServerSocket được thiết kế riêng cho các ứng dụng máy chủ để tạo kết nối tại một cổng và lắng nghe client."
  },
  {
    "question": "Khi phương thức accept() của lớp ServerSocket được gọi, chương trình sẽ hoạt động ra sao?",
    "options": [
      "A. Chạy tiếp lệnh phía dưới ngay lập tức.",
      "B. Chặn (block) và chờ đợi vô thời hạn cho tới khi có một máy khách (Client) kết nối đến.",
      "C. Ném ra lỗi ngoại lệ nếu chưa có client sẵn sàng.",
      "D. Gửi một thông báo quảng bá ra mạng."
    ],
    "answer": 1,
    "explanation": "Phương thức accept() sẽ chặn (block) tiến trình cho đến khi có một client kết nối đến cổng hoặc khi socket hết hạn thời gian chờ."
  },
  {
    "question": "Trong mô hình TCP Client/Server, Client dùng hàm tạo (constructor) nào của lớp Socket để chủ động kết nối tới Server?",
    "options": [
      "A. new Socket(String host, int port)",
      "B. new Socket()",
      "C. new Socket(int port)",
      "D. Cả A và B"
    ],
    "answer": 0,
    "explanation": "Client khởi tạo Socket và truyền hostname cùng port để hệ thống thiết lập đường truyền TCP trực tiếp tới Server."
  },
  {
    "question": "Để thiết lập thời gian chờ dữ liệu (timeout) tránh để Socket bị treo vĩnh viễn, ta dùng phương thức nào?",
    "options": [
      "A. setWaitTime()",
      "B. setSoTimeout(int timeout)",
      "C. connect(timeout)",
      "D. close()"
    ],
    "answer": 1,
    "explanation": "Phương thức setSoTimeout() thiết lập thời gian sống hoặc chờ dữ liệu tối đa tính bằng mili giây."
  },
  {
    "question": "Phương thức getLocalPort() của lớp Socket trả về giá trị gì?",
    "options": [
      "A. Cổng đang lắng nghe của máy tính từ xa.",
      "B. Cổng mạng của Gateway.",
      "C. Cổng mà socket bị ràng buộc trên máy cục bộ (local).",
      "D. Số lượng cổng đang mở."
    ],
    "answer": 2,
    "explanation": "Nó trả về số hiệu cổng phía máy nội bộ (local) đang dùng để duy trì kết nối."
  },
  {
    "question": "Khi lập trình TCP mạng, tại sao máy chủ lại thường chứa vòng lặp `while (true)` bọc lấy phương thức `accept()`?",
    "options": [
      "A. Để liên tục kiểm tra lỗi phần cứng mạng.",
      "B. Để tự động khởi động lại nếu máy chủ sập.",
      "C. Để máy chủ sau khi xử lý xong một client có thể tiếp tục lắng nghe và phục vụ các client khác.",
      "D. Để chiếm dụng tối đa băng thông."
    ],
    "answer": 2,
    "explanation": "Vòng lặp này giúp chương trình Server không bị thoát sau khi phục vụ một client, mà quay lại duy trì trạng thái chờ kết nối tiếp theo."
  },
  {
    "question": "Ứng dụng client và server cần thống nhất với nhau điều kiện gì khi giao tiếp qua TCP?",
    "options": [
      "A. Phải dùng chung hệ điều hành Windows.",
      "B. Phải thống nhất quy tắc trao đổi dữ liệu (giao thức/thứ tự ghi đọc) để tránh treo hoặc nhận sai thông tin.",
      "C. Phải cùng kết nối bằng cổng số 80.",
      "D. Phải truyền dữ liệu bằng byte[] không qua Stream."
    ],
    "answer": 1,
    "explanation": "Kết nối TCP duy trì dòng luồng, do đó việc gửi-nhận phải nhịp nhàng và thống nhất theo quy tắc hoặc cấu trúc đã quy định trước."
  },
  {
    "question": "Khi khởi tạo `new ServerSocket(0)`, ServerSocket sẽ được hệ thống gán vào cổng nào?",
    "options": [
      "A. Báo lỗi vì 0 là cổng hệ thống.",
      "B. Sẽ tìm một cổng rảnh ngẫu nhiên chưa được sử dụng bởi hệ điều hành.",
      "C. Cổng 80.",
      "D. Cổng 65535."
    ],
    "answer": 1,
    "explanation": "Truyền 0 vào constructor ServerSocket sẽ ra lệnh cho máy chủ tự động rà soát và cấp phát một cổng còn trống."
  },
  {
    "question": "Cổng động (dynamic hay private port) có khoảng giá trị từ đâu đến đâu?",
    "options": [
      "A. 0 - 1023",
      "B. 1024 - 49151",
      "C. 49152 - 65535",
      "D. Bất kỳ giá trị nào từ 0 - 65535"
    ],
    "answer": 2,
    "explanation": "Dải từ 49152 đến 65535 là các cổng động dùng riêng, các ứng dụng có thể sử dụng mà không cần đăng ký."
  },
  {
    "question": "Phương thức bind(SocketAddress host, int backlog) của lớp ServerSocket có tác dụng gì?",
    "options": [
      "A. Buộc client ngắt kết nối.",
      "B. Gửi mảng dữ liệu.",
      "C. Liên kết socket tới một địa chỉ mạng và cổng xác định khi socket được tạo không đối số.",
      "D. Thay đổi cổng đang hoạt động sang một cổng khác."
    ],
    "answer": 2,
    "explanation": "bind() thường được sử dụng khi chúng ta dùng constructor rỗng `new ServerSocket()` và cần ràng buộc vào địa chỉ cụ thể sau đó."
  },
  {
    "question": "Sau khi quá trình trao đổi qua TCP kết thúc, lập trình viên cần làm gì với Socket?",
    "options": [
      "A. Chờ garbage collector tự thu gom.",
      "B. Gọi phương thức close() để giải phóng cổng và tài nguyên hệ thống.",
      "C. Dùng phương thức stop() để đóng tiến trình.",
      "D. Gọi flush() và kết thúc."
    ],
    "answer": 1,
    "explanation": "Gọi close() là thao tác bắt buộc để đóng kết nối mạng, trả lại số hiệu cổng và hủy tài nguyên cấp phát cho socket."
  },
  {
    "question": "Lỗi nào thường được Java ném ra khi không thể kết nối hoặc cổng đã bị ứng dụng khác chiếm giữ?",
    "options": [
      "A. NumberFormatException",
      "B. IOException",
      "C. SQLException",
      "D. NullPointerException"
    ],
    "answer": 1,
    "explanation": "Ngoại lệ IOException là lỗi phổ biến nhất trong nhóm lớp java.net liên quan tới vào/ra dữ liệu qua mạng."
  },
  {
    "question": "Để tăng tốc độ và khả năng đọc ghi cho TCP, người ta thường bọc InputStream/OutputStream bằng lớp nào?",
    "options": [
      "A. Scanner / PrintWriter",
      "B. FileReader / FileWriter",
      "C. DataReader / DataWriter",
      "D. StringInputStream"
    ],
    "answer": 0,
    "explanation": "Lớp Scanner và PrintWriter hỗ trợ đọc ghi dữ liệu các kiểu số, chuỗi dễ dàng và có bộ đệm (buffer) hiệu quả, thường được chuộng trong lập trình mạng TCP."
  },
  {
    "question": "Lệnh `PrintWriter out = new PrintWriter(sk.getOutputStream(), true);` tham số true có ý nghĩa gì?",
    "options": [
      "A. Mở khóa cho phép gửi dữ liệu.",
      "B. Cho phép kết nối tự động cấu hình lại.",
      "C. Thiết lập tự động đẩy (auto-flush) dữ liệu ra luồng sau mỗi lệnh gọi println.",
      "D. Bật mã hóa bảo mật."
    ],
    "answer": 2,
    "explanation": "Tham số true là autoFlush, tự động đẩy dữ liệu lên đường truyền mỗi khi gửi dòng ký tự mà không cần gọi flush() thủ công."
  },
  {
    "question": "Giao thức UDP là viết tắt của cụm từ nào?",
    "options": [
      "A. Uniform Data Protocol",
      "B. Universal Datagram Protocol",
      "C. User Datagram Protocol",
      "D. Utility Data Protocol"
    ],
    "answer": 2,
    "explanation": "UDP là viết tắt của User Datagram Protocol, một giao thức không liên kết hướng tới truyền gửi tốc độ nhanh."
  },
  {
    "question": "Phát biểu nào sau đây KHÔNG ĐÚNG về giao thức UDP?",
    "options": [
      "A. Không kiểm tra lỗi hay truyền lại gói tin mất.",
      "B. Không đảm bảo gói tin đến theo đúng thứ tự.",
      "C. Đòi hỏi phải thiết lập một kết nối 2 chiều cố định giữa Client và Server trước khi truyền tin.",
      "D. Tốc độ truyền nhanh hơn TCP."
    ],
    "answer": 2,
    "explanation": "Khác với TCP, UDP không tạo ra kết nối giữa 2 máy tính cố định mà gửi dữ liệu qua các gói độc lập."
  },
  {
    "question": "Các ứng dụng nào thường được ưu tiên sử dụng giao thức UDP?",
    "options": [
      "A. Gửi và nhận thư điện tử (Email).",
      "B. Tải tệp tin quan trọng dung lượng lớn.",
      "C. Duyệt website ngân hàng.",
      "D. Phát video trực tuyến (livestream) và trò chơi trực tuyến."
    ],
    "answer": 3,
    "explanation": "UDP ưu tiên tốc độ, chấp nhận rớt gói tin nhỏ trong streaming và game online để giữ thời gian thực thay vì độ trễ sửa lỗi của TCP."
  },
  {
    "question": "Số lượng byte tối đa có thể gửi trong một gói tin UDP là bao nhiêu?",
    "options": [
      "A. 1500 byte",
      "B. 8192 byte",
      "C. 65507 byte",
      "D. 65535 byte"
    ],
    "answer": 2,
    "explanation": "Kích thước payload lớn nhất thực tế cho DatagramPacket UDP theo cấu trúc của IP là 65507 byte."
  },
  {
    "question": "Trong lập trình Java, lớp nào đóng vai trò gửi và nhận các gói tin thông qua giao thức UDP?",
    "options": [
      "A. ServerSocket",
      "B. Socket",
      "C. DatagramPacket",
      "D. DatagramSocket"
    ],
    "answer": 3,
    "explanation": "Cả phía người gửi và người nhận UDP đều sử dụng DatagramSocket làm kênh để gửi và nhận gói tin mạng."
  },
  {
    "question": "Lớp DatagramPacket được sử dụng với mục đích chính là gì?",
    "options": [
      "A. Tạo kết nối cố định với máy chủ.",
      "B. Đóng gói dữ liệu (thành packet) mang theo địa chỉ IP và Cổng, hoặc tạo bộ đệm chứa dữ liệu sắp nhận về.",
      "C. Mã hóa dữ liệu đường truyền.",
      "D. Đọc dữ liệu theo dòng vào/ra."
    ],
    "answer": 1,
    "explanation": "DatagramPacket là lớp lưu trữ dữ liệu truyền nhận dạng mảng byte kèm thông tin máy khách."
  },
  {
    "question": "Khi tạo một `DatagramPacket` với mục đích GỬI dữ liệu đi, constructor bắt buộc phải có những tham số nào?",
    "options": [
      "A. Mảng byte chứa dữ liệu, độ dài dữ liệu, đối tượng InetAddress máy nhận và số cổng.",
      "B. Mảng byte đệm và chiều dài tối đa.",
      "C. Chỉ cần địa chỉ IP máy nhận và cổng.",
      "D. Chuỗi nội dung String và cổng."
    ],
    "answer": 0,
    "explanation": "Gói tin gửi đi cần mang theo dữ liệu (buf, length) và địa chỉ đích (address, port) để hệ thống biết nơi chuyển đến."
  },
  {
    "question": "Khi tạo một `DatagramPacket` để NHẬN dữ liệu, tham số nào là cần thiết cho constructor?",
    "options": [
      "A. Địa chỉ IP máy gửi và cổng máy gửi.",
      "B. Cổng đích và chiều dài chuỗi gửi.",
      "C. Mảng byte làm vùng nhớ đệm (buffer) và số byte tối đa có thể nhận (length).",
      "D. DatagramSocket để kết nối."
    ],
    "answer": 2,
    "explanation": "Khởi tạo packet nhận chỉ cần chuẩn bị một mảng byte trống để ứng dụng điền thông tin khi nhận gói tin về."
  },
  {
    "question": "Hàm `receive(DatagramPacket p)` của DatagramSocket có đặc điểm gì?",
    "options": [
      "A. Chỉ chặn kết nối trong 1 giây.",
      "B. Sẽ chặn tiến trình (block) cho đến khi có một gói tin từ mạng bay vào.",
      "C. Luôn trả về true nếu mạng kết nối ổn định.",
      "D. Mở cổng kết nối tương tự accept() của TCP."
    ],
    "answer": 1,
    "explanation": "Phương thức này bị khóa luồng thực thi (block) cho đến khi bắt được 1 DatagramPacket từ mạng gửi tới."
  },
  {
    "question": "Phương thức `getAddress()` của đối tượng DatagramPacket thu được sau khi hàm receive() kết thúc sẽ trả về gì?",
    "options": [
      "A. Địa chỉ IP của máy chủ DNS.",
      "B. Địa chỉ loopback mặc định.",
      "C. Địa chỉ IP của máy đã gửi gói tin đó.",
      "D. Chuỗi String mã hóa dữ liệu."
    ],
    "answer": 2,
    "explanation": "DatagramPacket nhận về chứa toàn bộ thông tin của máy đối tác bao gồm IP, nhờ vậy server UDP mới biết đích để phản hồi."
  },
  {
    "question": "Phương thức `getLength()` của đối tượng DatagramPacket sau khi nhận gói tin có ý nghĩa gì?",
    "options": [
      "A. Trả về kích thước mảng buf tối đa.",
      "B. Trả về chiều dài số hiệu cổng.",
      "C. Trả về số byte dữ liệu thực tế chứa trong gói tin.",
      "D. Độ trễ tính bằng mili giây."
    ],
    "answer": 2,
    "explanation": "Kích thước mảng đệm có thể lớn hơn dữ liệu gửi (ví dụ 65507 byte), getLength() giúp lấy chính xác số byte dữ liệu để giải mã."
  },
  {
    "question": "Client khởi tạo `DatagramSocket sk = new DatagramSocket();` sẽ gây ra hành vi nào?",
    "options": [
      "A. Báo lỗi vì không có tham số cổng.",
      "B. Socket sẽ mở tự do sử dụng một cổng rỗng ngẫu nhiên trên máy khách để liên lạc.",
      "C. Gửi yêu cầu xin cấp cổng từ Server.",
      "D. Lắng nghe ở cổng 0."
    ],
    "answer": 1,
    "explanation": "Constructor không chỉ định cổng được dùng ở máy Client để hệ điều hành tự phân công 1 cổng rảnh cho việc gửi nhận UDP."
  },
  {
    "question": "Lệnh `socket.send(packet)` có thể ném ra ngoại lệ nào nếu quá trình gửi gặp trục trặc?",
    "options": [
      "A. ArrayOutOfBoundsException",
      "B. NullPointerException",
      "C. IOException",
      "D. NumberFormatException"
    ],
    "answer": 2,
    "explanation": "Các hàm thao tác trên mạng (send, receive, close) thông thường sẽ throws IOException."
  },
  {
    "question": "Ngoại lệ `SocketException` ném ra khi khởi tạo `DatagramSocket(port)` phía Server thường chỉ ra điều gì?",
    "options": [
      "A. Port đó đã bị chương trình khác chiếm dụng.",
      "B. Địa chỉ IP sai định dạng.",
      "C. Kết nối Internet bị mất hoàn toàn.",
      "D. Không đúng phiên bản Java."
    ],
    "answer": 0,
    "explanation": "Tạo Socket gắn với một port sẽ văng lỗi SocketException nếu port đó không khả dụng (đang có dịch vụ khác mở)."
  },
  {
    "question": "Nếu muốn cấu hình thời gian đợi khi nhận gói tin, ta thiết lập thời gian chờ timeout bằng lệnh nào?",
    "options": [
      "A. setSoTimeout(int timeout)",
      "B. sleep(timeout)",
      "C. wait(timeout)",
      "D. receive(timeout)"
    ],
    "answer": 0,
    "explanation": "Cũng như TCP, UDP DatagramSocket sử dụng setSoTimeout để đảm bảo hàm receive không bị treo vĩnh viễn nếu mạng lỗi."
  },
  {
    "question": "Ví dụ để giải mã mảng byte thành chuỗi String từ `rPacket` nhận được, cú pháp nào là chính xác?",
    "options": [
      "A. String s = new String(rPacket);",
      "B. String s = rPacket.toString();",
      "C. String s = new String(rPacket.getData(), rPacket.getOffset(), rPacket.getLength());",
      "D. String s = (String) rPacket;"
    ],
    "answer": 2,
    "explanation": "Phương thức này chuyển mảng byte về chuỗi bắt đầu từ vị trí offset và có độ dài bằng lượng byte dữ liệu thực tế thu được."
  },
  {
    "question": "Phía Server của UDP khác với TCP ở đặc điểm nào sau đây?",
    "options": [
      "A. Server UDP không cần duy trì vòng lặp while.",
      "B. Server UDP không sử dụng một Socket chuyên để \"lắng nghe\" và sinh ra socket con như ServerSocket, nó dùng chung 1 DatagramSocket cho mọi client.",
      "C. Server UDP bắt buộc phải gọi phương thức accept().",
      "D. Server UDP phải gửi dữ liệu trước khi nhận."
    ],
    "answer": 1,
    "explanation": "Server UDP chỉ cần 1 DatagramSocket gắn vào cổng để hứng DatagramPacket từ mọi nguồn, không sinh socket riêng như TCP."
  },
  {
    "question": "Sự giống nhau giữa gọi điện thoại và gửi thư giấy thường được dùng để minh hoạ sự khác biệt nào?",
    "options": [
      "A. Gọi điện tương đương TCP, gửi thư tay tương đương UDP.",
      "B. Gọi điện tương đương UDP, gửi thư tương đương TCP.",
      "C. Cả 2 đều minh họa UDP.",
      "D. Cả 2 đều minh họa TCP."
    ],
    "answer": 0,
    "explanation": "TCP cần thiết lập liên lạc 2 chiều như gọi điện thoại, UDP gửi đi nhưng không biết đối tác có nhận được không giống gửi thư tay."
  },
  {
    "question": "Phương thức `bind(SocketAddress addr)` của DatagramSocket nhằm mục đích gì?",
    "options": [
      "A. Kéo một gói tin về.",
      "B. Đóng socket hiện hành.",
      "C. Ràng buộc socket vào một địa chỉ mạng cụ thể nếu socket được khởi tạo mà chưa chỉ định cổng.",
      "D. Biến đổi Socket TCP thành UDP."
    ],
    "answer": 2,
    "explanation": "bind() cho phép thay đổi hoặc cấp phát tường minh địa chỉ IP, cổng cho DatagramSocket sau khi đã khởi tạo constructor rỗng."
  },
  {
    "question": "Trong lập trình UDP, nếu máy chủ gửi trả lời cho một máy khách, nó tìm địa chỉ đích ở đâu?",
    "options": [
      "A. Quét toàn bộ hệ thống mạng.",
      "B. Tra cứu qua DNS tự động.",
      "C. Lấy địa chỉ IP và cổng trực tiếp từ đối tượng DatagramPacket mà Client gửi tới.",
      "D. Yêu cầu Client gửi lại thông tin."
    ],
    "answer": 2,
    "explanation": "Packet do client gửi đến sẽ chứa địa chỉ IP và Cổng của Client, server trích xuất thông qua getAddress() và getPort() để làm đích phản hồi."
  },
  {
    "question": "RMI trong Java là viết tắt của thuật ngữ nào?",
    "options": [
      "A. Remote Message Interface",
      "B. Remote Method Invocation",
      "C. Random Memory Interface",
      "D. Routing Multiple Instances"
    ],
    "answer": 1,
    "explanation": "RMI (Remote Method Invocation) là kỹ thuật cho phép triệu gọi các phương thức từ xa."
  },
  {
    "question": "Kỹ thuật RMI có chức năng gì trong Java?",
    "options": [
      "A. Giao tiếp cơ sở dữ liệu.",
      "B. Cách thức giao tiếp giữa các đối tượng phân tán trong Java nằm trên các máy khác nhau để chúng có thể triệu gọi phương thức lẫn nhau.",
      "C. Hỗ trợ đồ hoạ 3D phân tán.",
      "D. Nén dữ liệu truyền thông qua Web."
    ],
    "answer": 1,
    "explanation": "RMI giúp gọi hàm/phương thức của các object không ở cục bộ máy ảo (JVM) hiện hành mà nằm tại máy tính ở xa."
  },
  {
    "question": "Trong mô hình truyền thông RMI, lớp trung gian được tự động sinh ra phục vụ phía Client gọi là gì?",
    "options": [
      "A. Registry",
      "B. Naming",
      "C. Skeleton (Skel)",
      "D. Stub"
    ],
    "answer": 3,
    "explanation": "Stub nằm ở client đóng vai trò làm proxy chuyển tiếp yêu cầu triệu gọi qua mạng."
  },
  {
    "question": "Tương ứng với Stub ở máy khách, lớp trung gian nào ở phía Server để tiếp nhận thông tin từ Client?",
    "options": [
      "A. Naming Server",
      "B. Skeleton (Skel)",
      "C. RMI Registry",
      "D. UnicastRemoteObject"
    ],
    "answer": 1,
    "explanation": "Skeleton dùng ở Server chịu trách nhiệm bóc tách thông số mạng rồi kích hoạt phương thức tương ứng trên Remote Object."
  },
  {
    "question": "Trong thiết kế hệ thống RMI, Interface (Giao diện) khai báo các phương thức từ xa buộc phải kế thừa lớp nào?",
    "options": [
      "A. java.io.Serializable",
      "B. java.rmi.server.UnicastRemoteObject",
      "C. java.rmi.Remote",
      "D. java.lang.Runnable"
    ],
    "answer": 2,
    "explanation": "Lớp interface bắt buộc phải kế thừa (extends) `java.rmi.Remote` để RMI nhận diện đây là một khai báo giao diện cho truy cập từ xa."
  },
  {
    "question": "Các phương thức được định nghĩa trong Interface RMI đều phải throws loại ngoại lệ nào?",
    "options": [
      "A. IOException",
      "B. RemoteException",
      "C. ClassNotFoundException",
      "D. IllegalArgumentException"
    ],
    "answer": 1,
    "explanation": "Bất cứ lỗi nào xảy ra do ngắt mạng hoặc thất bại trong giao tiếp từ xa đều sẽ tung ra ngoại lệ `RemoteException`."
  },
  {
    "question": "Lớp triển khai các phương thức được định nghĩa trong Remote interface (Remote implementation) thường kế thừa (extends) lớp nào?",
    "options": [
      "A. RuntimeException",
      "B. TCP Socket",
      "C. UnicastRemoteObject",
      "D. Thread"
    ],
    "answer": 2,
    "explanation": "Kế thừa UnicastRemoteObject để class đó trở thành một Remote Object thực sự, chịu trách nhiệm lắng nghe kết nối đến qua cổng của RMI."
  },
  {
    "question": "Ở Server, thành phần nào có nhiệm vụ quản lý, lưu trữ và ánh xạ tên của một Remote Object với object thực tế để Client có thể tìm thấy?",
    "options": [
      "A. SQL Database",
      "B. RMI Registry (Bộ đăng ký)",
      "C. Lớp Stub",
      "D. Trình biên dịch (Compiler)"
    ],
    "answer": 1,
    "explanation": "Bộ đăng ký giúp ánh xạ (bind) tên chuỗi (ví dụ \"PrimeService\") với đối tượng Remote để Client thông qua đó truy xuất."
  },
  {
    "question": "Giao thức truyền tin mặc định nằm bên dưới cơ chế của RMI là gì?",
    "options": [
      "A. Datagram UDP",
      "B. Các TCP Socket",
      "C. ICMP Ping",
      "D. SMTP"
    ],
    "answer": 1,
    "explanation": "Việc truyền dữ liệu xuyên thấu giữa 2 máy ảo JVM thông qua RMI được Java thiết lập dựa trên kết nối TCP Socket ẩn."
  },
  {
    "question": "Quy trình bước 1 (cơ bản nhất) để xây dựng ứng dụng theo mô hình RMI là gì?",
    "options": [
      "A. Tạo một Registry trên một cổng cụ thể.",
      "B. Gọi hàm `lookup` trên Client.",
      "C. Tạo project và định nghĩa Interface (giao diện) chứa các phương thức cần gọi dùng chung cho cả Client và Server.",
      "D. Thiết kế giao diện đồ hoạ cho Client."
    ],
    "answer": 2,
    "explanation": "Interface định nghĩa chung là bản hợp đồng bắt buộc cần phải có ở cả 2 project Server và Client để xác định các hàm hỗ trợ."
  },
  {
    "question": "Để tự động sinh một Registry nội bộ ngay trong chương trình phía Server ở cổng 3210, câu lệnh nào được dùng?",
    "options": [
      "A. LocateRegistry.getRegistry(\"localhost\", 3210);",
      "B. LocateRegistry.createRegistry(3210);",
      "C. new Registry(3210);",
      "D. System.out.setPort(3210);"
    ],
    "answer": 1,
    "explanation": "Lớp LocateRegistry cung cấp phương thức static createRegistry(port) để bật dịch vụ đăng ký RMI ngay bên trong chương trình Server."
  },
  {
    "question": "Để gắn/đăng ký dịch vụ đối tượng của lớp `Prime` với cái tên `\"PrimeService\"`, Server RMI dùng lệnh nào?",
    "options": [
      "A. reg.rebind(\"PrimeService\", new Prime());",
      "B. reg.lookup(\"PrimeService\");",
      "C. reg.register(\"Prime\", \"PrimeService\");",
      "D. reg.insert(\"PrimeService\", new Prime());"
    ],
    "answer": 0,
    "explanation": "`rebind()` (hoặc bind()) thực hiện liên kết đối tượng từ xa vào bảng tên của Registry."
  },
  {
    "question": "Để lấy Registry từ Server đang chạy ở địa chỉ host và cổng port, Client sẽ sử dụng lệnh nào?",
    "options": [
      "A. LocateRegistry.createRegistry(port)",
      "B. Naming.lookup(host)",
      "C. LocateRegistry.getRegistry(host, port)",
      "D. Runtime.getRegistry()"
    ],
    "answer": 2,
    "explanation": "Lệnh getRegistry trả về bộ định tuyến tham chiếu trỏ tới Registry trên Server, qua đó có thể tìm các Service."
  },
  {
    "question": "Ở máy khách (Client), sau khi lấy được đối tượng Registry, phương thức nào được dùng để tìm và gán đối tượng phục vụ từ xa?",
    "options": [
      "A. fetch()",
      "B. getService()",
      "C. rebind()",
      "D. lookup()"
    ],
    "answer": 3,
    "explanation": "Phương thức lookup(\"Tên_Dịch_Vụ\") truy vấn trong RMI Registry và trả lại stub của Remote Object để gọi hàm."
  },
  {
    "question": "Ngoại lệ `NotBoundException` thường bị văng ra trong hoàn cảnh nào ở RMI?",
    "options": [
      "A. Khi Server chưa mở port 3210.",
      "B. Khi mảng dữ liệu truyền qua hàm vượt quá bộ đệm.",
      "C. Khi Client dùng phương thức lookup tìm một dịch vụ chưa được đăng ký (không khớp tên) ở Registry.",
      "D. Lỗi do mạng chập chờn."
    ],
    "answer": 2,
    "explanation": "Không tìm thấy dịch vụ tương ứng với tên truy vấn trong Registry sẽ sinh ra lỗi chưa được gắn kết (NotBoundException)."
  },
  {
    "question": "Một trong những đặc tính vượt trội của RMI so với Socket đơn thuần là gì?",
    "options": [
      "A. Chỉ mã hoá dạng String.",
      "B. RMI truyền nhận dữ liệu theo dạng byte thô như Socket UDP.",
      "C. RMI xử lý truyền dữ liệu phân tán một cách trong suốt, gọi phương thức trên đối tượng ở xa y như đối tượng cục bộ.",
      "D. RMI không bao giờ dính lỗi mạng."
    ],
    "answer": 2,
    "explanation": "Cấu trúc lớp trung gian ẩn đi việc điều hướng gói tin mạng TCP, cho phép lập trình viên chỉ cần chú tâm vào logic phương thức và đối tượng."
  },
  {
    "question": "RMI có cho phép một hàm từ xa trả về các kiểu dữ liệu phức tạp ngoài số và chuỗi không?",
    "options": [
      "A. Không, chỉ hỗ trợ số (int, double).",
      "B. Không, chỉ hỗ trợ String và int.",
      "C. Có, nhưng người lập trình phải tự viết mã byte dịch.",
      "D. Có, thông qua cơ chế Serialize của Java."
    ],
    "answer": 3,
    "explanation": "Miễn là các đối tượng tham số truyền vào hay trả về thoả mãn thuộc tính Serialize (java.io.Serializable), hệ thống JVM có thể tuần tự hóa/chuyển đổi qua lại trơn tru."
  },
  {
    "question": "Lệnh `(NumberInterface)reg.lookup(\"NumberService\");` thực hiện chức năng gì?",
    "options": [
      "A. Ép kiểu object trả về từ máy chủ thành chuẩn Interface, tạo đối tượng stub ở Client.",
      "B. Kiểm tra xem NumberService có bị lỗi mạng không.",
      "C. Xóa dịch vụ NumberService.",
      "D. Gửi con số qua mạng."
    ],
    "answer": 0,
    "explanation": "lookup trả về Object, phải được ép kiểu rõ ràng về Interface dùng chung để gọi đúng các phương thức."
  },
  {
    "question": "Lập trình RMI có cơ chế \"callback\", cơ chế này cho phép điều gì?",
    "options": [
      "A. Máy khách gửi dữ liệu nặc danh.",
      "B. Máy chủ triệu gọi ngược lại các phương thức nằm ở máy khách (Client).",
      "C. Tự động sao lưu bộ nhớ.",
      "D. Tự sửa mã nguồn bị lỗi."
    ],
    "answer": 1,
    "explanation": "RMI hỗ trợ Callback, nghĩa là Client có thể truyền Remote Object của nó cho Server, Server nắm được Stub và có thể gọi ngược phương thức thực thi trên Client."
  },
  {
    "question": "Tác dụng của từ khóa `implements` khi viết lớp `Server Class` (vd: StringClass implements StringInterface)?",
    "options": [
      "A. Đánh dấu Server chỉ dùng được Socket UDP.",
      "B. Đăng ký tên cho dịch vụ.",
      "C. Buộc lớp Server phải thực hiện cụ thể (hiện thực mã) cho các phương thức trừu tượng đã định nghĩa trong RMI Interface.",
      "D. Bỏ qua cấu trúc RMI."
    ],
    "answer": 2,
    "explanation": "Java Interface chỉ khai báo, lớp implement đóng vai trò hiện thực chức năng logic từ xa cho các khai báo đó."
  }
];