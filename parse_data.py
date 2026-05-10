import json
import re

raw_text = """
**CHƯƠNG 4: LỚP INETADDRESS**

Câu 1: Địa chỉ IP phiên bản 4 (IPv4) có độ dài bao nhiêu byte?
A. 2 byte
B. 4 byte
C. 8 byte
D. 16 byte

Đáp án đúng: B
Giải thích: Theo tài liệu, IPv4 có độ dài 4 byte (thường kí hiệu là 4 số nguyên phân cách bởi dấu chấm).

Câu 2: Địa chỉ IP phiên bản 6 (IPv6) có độ dài bao nhiêu byte?
A. 4 byte
B. 8 byte
C. 16 byte
D. 32 byte

Đáp án đúng: C
Giải thích: Địa chỉ IPv6 được cấu tạo với độ dài 16 byte để khắc phục tình trạng cạn kiệt địa chỉ IPv4.

Câu 3: Hệ thống nào được sử dụng để ánh xạ giữa tên miền (hostname) và địa chỉ IP?
A. DHCP
B. DNS
C. TCP
D. UDP

Đáp án đúng: B
Giải thích: Hệ thống DNS (Domain Name System) chuyển đổi địa chỉ IP dạng số thành các tên máy (hostname) dễ nhớ đối với con người.

Câu 4: Trong Java, lớp nào là biểu diễn bậc cao của địa chỉ IP, bao gồm cả IPv4 và IPv6?
A. java.net.Socket
B. java.net.NetworkInterface
C. java.net.InetAddress
D. java.net.ServerSocket

Đáp án đúng: C
Giải thích: InetAddress là lớp đại diện cho địa chỉ IP, cung cấp thông tin về hostname và địa chỉ mạng.

Câu 5: Để khởi tạo một đối tượng InetAddress qua tên miền (hostname), phương thức static nào thường được sử dụng nhất?
A. getLocalHost()
B. getByAddress()
C. getAllByName()
D. getByName()

Đáp án đúng: D
Giải thích: Phương thức InetAddress.getByName(String host) thường được dùng để gọi máy chủ DNS và lấy đối tượng InetAddress tương ứng.

Câu 6: Nếu một hostname trỏ tới nhiều địa chỉ IP, phương thức nào được dùng để lấy tất cả các địa chỉ này?
A. getAllByName()
B. getByAddress()
C. getHostName()
D. getLocalHost()

Đáp án đúng: A
Giải thích: Phương thức getAllByName() trả về một mảng các đối tượng InetAddress chứa toàn bộ máy chủ tương ứng.

Câu 7: Nếu máy tính không có kết nối Internet và IP tĩnh, phương thức getLocalHost() sẽ trả về địa chỉ IP mặc định nào?
A. 0.0.0.0
B. 127.0.0.1
C. 255.255.255.255
D. 192.168.1.1

Đáp án đúng: B
Giải thích: Khi không lấy được IP mạng, máy tự động trả về địa chỉ loopback tương ứng là 127.0.0.1.

Câu 8: Với kết quả tra cứu DNS không tìm thấy (lỗi), lớp InetAddress sẽ lưu trữ kết quả này trong bộ nhớ đệm (cache) mặc định bao lâu?
A. 0 giây
B. 5 giây
C. 10 giây
D. Lưu vô thời hạn

Đáp án đúng: C
Giải thích: Theo tài liệu, với những kết quả không tốt (không tìm thấy host), InetAddress sẽ lưu giữ kết quả này trong 10 giây.

Câu 9: Sự khác biệt lớn nhất giữa getCanonicalHostName() và getHostName() là gì?
A. getCanonicalHostName() luôn trả về mảng byte.
B. getCanonicalHostName() sẽ luôn gọi truy vấn DNS nếu có thể và thay thế kết quả cũ.
C. getCanonicalHostName() chạy nhanh hơn và không cần DNS.
D. getHostName() không bao giờ gọi máy chủ DNS.

Đáp án đúng: B
Giải thích: getCanonicalHostName() mạnh hơn vì nó chủ động gọi DNS và có thể thay thế kết quả trước đó về việc tìm hostname, trong khi getHostName() chỉ gọi khi không chắc chắn.

Câu 10: Phương thức getAddress() của lớp InetAddress trả về dữ liệu kiểu gì?
A. int[]
B. String
C. char[]
D. byte[]

Đáp án đúng: D
Giải thích: Phương thức này trả về một mảng kiểu byte biểu diễn địa chỉ IP của máy.

Câu 11: Kiểu byte trong Java có phạm vi giá trị là bao nhiêu?
A. Từ 0 đến 255
B. Từ -128 đến 127
C. Từ 0 đến 128
D. Từ -256 đến 255

Đáp án đúng: B
Giải thích: Trong Java, kiểu byte có dấu với phạm vi từ -128 đến 127, khác với các ngôn ngữ như C.

Câu 12: Địa chỉ nào sau đây thuộc khối địa chỉ multicast IPv4?
A. 127.0.0.1
B. 192.168.1.0 tới 192.168.1.255
C. 224.0.0.0 tới 239.255.255.255
D. 10.0.0.0 tới 10.255.255.255

Đáp án đúng: C
Giải thích: Địa chỉ IPv4 trong phạm vi 224.0.0.0 tới 239.255.255.255 là địa chỉ multicast, dùng để gửi thông điệp tới nhiều host cùng lúc.

Câu 13: Phương thức isLoopbackAddress() của InetAddress dùng để làm gì?
A. Kiểm tra xem địa chỉ IP có phải là địa chỉ localhost (ví dụ 127.0.0.1) hay không.
B. Kiểm tra xem địa chỉ có khớp với bất kỳ mạng nào không.
C. Kiểm tra xem host có kết nối được không.
D. Kiểm tra xem địa chỉ là IPv4 hay IPv6.

Đáp án đúng: A
Giải thích: isLoopbackAddress() trả về true nếu địa chỉ là loopback (localhost), phục vụ cho kiểm tra nội bộ máy.

Câu 14: Để kiểm tra khả năng kết nối tới một nút mạng từ host hiện tại, ta sử dụng phương thức nào của InetAddress?
A. ping()
B. isReachable()
C. isAnyLocalAddress()
D. connect()

Đáp án đúng: B
Giải thích: isReachable() sử dụng công cụ truy vết để kiểm tra host có phản hồi trong thời gian timeout hay không.

Câu 15: Lớp java.net.InetAddress kế thừa trực tiếp từ lớp nào?
A. java.net.Socket
B. java.io.Serializable
C. java.lang.Object
D. java.net.NetworkInterface

Đáp án đúng: C
Giải thích: Giống như các lớp cơ bản khác, InetAddress kế thừa trực tiếp từ java.lang.Object và override các hàm equals, hashCode, toString.

Câu 16: Khi nào phương thức equals(Object o) của lớp InetAddress trả về giá trị true?
A. Khi hai đối tượng có chung hostname nhưng khác IP.
B. Khi hai đối tượng được tạo cùng thời điểm.
C. Khi hai đối tượng trỏ tới cùng một địa chỉ IP.
D. Khi hai đối tượng cùng loại IPv6.

Đáp án đúng: C
Giải thích: Nếu hai object InetAddress có cùng địa chỉ IP thì được xem là bằng nhau, mặc dù hostname của chúng có thể khác nhau.

Câu 17: Lớp NetworkInterface trong Java đại diện cho điều gì?
A. Đại diện cho một luồng byte trong mạng.
B. Đại diện cho giao diện mạng cục bộ vật lý hoặc ảo (như card Ethernet, Wifi).
C. Đại diện cho một máy chủ tên miền (DNS Server).
D. Đại diện cho cổng truyền thông của TCP.

Đáp án đúng: B
Giải thích: Lớp NetworkInterface đại diện cho một địa chỉ IP cục bộ được gắn trên các thiết bị phần cứng như card mạng vật lý hoặc giao diện mạng ảo.

Câu 18: Phương thức NetworkInterface.getNetworkInterfaces() trả về kiểu dữ liệu nào sau đây?
A. Mảng các đối tượng InetAddress.
B. Một danh sách List<String> chứa tên giao diện.
C. Một đối tượng Enumeration<NetworkInterface>.
D. Một Map chứa cặp cổng và IP.

Đáp án đúng: C
Giải thích: Phương thức này trả về Enumeration<NetworkInterface> để liệt kê tất cả các giao diện mạng trên máy cục bộ.

Câu 19: Tham số timeout trong hàm isReachable(int timeout) có đơn vị tính là gì?
A. Giây
B. Phút
C. Mili giây
D. Micro giây

Đáp án đúng: C
Giải thích: Phương thức sẽ trả về true nếu host phản hồi trong thời gian timeout tính bằng mili giây.

Câu 20: Ngoại lệ nào thường xảy ra khi gọi phương thức InetAddress.getByName() với một tên miền không tồn tại?
A. IOException
B. SocketException
C. NullPointerException
D. UnknownHostException

Đáp án đúng: D
Giải thích: UnknownHostException được ném ra khi hệ thống DNS không thể phân giải được tên miền thành một địa chỉ IP.

---

**CHƯƠNG 5: LẬP TRÌNH VỚI GIAO THỨC TCP**

Câu 1: TCP trong mạng máy tính là viết tắt của cụm từ nào?
A. Transfer Control Protocol
B. Transmission Control Protocol
C. Terminal Communication Protocol
D. Telecommunication Control Protocol

Đáp án đúng: B
Giải thích: TCP (Transmission Control Protocol) là giao thức truyền thông cốt lõi cho phép giao tiếp tin cậy qua mạng IP.

Câu 2: Số hiệu cổng (port number) trong giao tiếp có thể nhận giá trị trong khoảng nào?
A. Từ 0 đến 1023
B. Từ 0 đến 65535
C. Từ 1024 đến 49151
D. Từ 0 đến 255

Đáp án đúng: B
Giải thích: Số hiệu cổng được cấu thành từ 16 bit, do đó có giá trị nằm trong khoảng từ 0 đến 65535.

Câu 3: Cổng hệ thống (well-known port) được dành riêng cho các quá trình của hệ thống nằm trong dải giá trị nào?
A. Từ 0 đến 1023
B. Từ 1024 đến 49151
C. Từ 49152 đến 65535
D. Từ 0 đến 65535

Đáp án đúng: A
Giải thích: Các cổng từ 0 đến 1023 là cổng hệ thống dành riêng cho các dịch vụ chuẩn như HTTP (80), FTP (21).

Câu 4: Dịch vụ Web giao thức HTTP thường lắng nghe mặc định ở cổng nào?
A. 21
B. 25
C. 80
D. 443

Đáp án đúng: C
Giải thích: Theo chuẩn mạng, cổng 80 được gán mặc định cho máy chủ cung cấp dịch vụ Web (HTTP).

Câu 5: Trong kiến trúc lập trình TCP của Java, lớp nào đóng vai trò như một đầu cuối (endpoint) để truyền nhận dữ liệu?
A. Socket
B. ServerSocket
C. NetworkInterface
D. DatagramSocket

Đáp án đúng: A
Giải thích: Socket đại diện cho một đầu cuối của một kết nối thực, dùng để gửi và nhận dữ liệu sau khi kết nối TCP được thiết lập.

Câu 6: Phương thức getInputStream() của lớp Socket có tác dụng gì?
A. Đẩy dữ liệu ra mạng cho máy nhận.
B. Lấy dòng dữ liệu đầu vào (Input Stream) để đọc dữ liệu từ xa gửi tới.
C. Bắt đầu lắng nghe các kết nối từ client.
D. Mở cổng kết nối trên máy chủ.

Đáp án đúng: B
Giải thích: Trả về dòng đầu vào (InputStream) của socket nhằm mục đích nhận luồng byte được máy tính đối tác gửi đến.

Câu 7: Lớp nào chỉ được sử dụng trong lập trình TCP ở phía Server nhằm lắng nghe yêu cầu kết nối?
A. Socket
B. DatagramSocket
C. ServerSocket
D. InetAddress

Đáp án đúng: C
Giải thích: Lớp ServerSocket được thiết kế riêng cho các ứng dụng máy chủ để tạo kết nối tại một cổng và lắng nghe client.

Câu 8: Khi phương thức accept() của lớp ServerSocket được gọi, chương trình sẽ hoạt động ra sao?
A. Chạy tiếp lệnh phía dưới ngay lập tức.
B. Chặn (block) và chờ đợi vô thời hạn cho tới khi có một máy khách (Client) kết nối đến.
C. Ném ra lỗi ngoại lệ nếu chưa có client sẵn sàng.
D. Gửi một thông báo quảng bá ra mạng.

Đáp án đúng: B
Giải thích: Phương thức accept() sẽ chặn (block) tiến trình cho đến khi có một client kết nối đến cổng hoặc khi socket hết hạn thời gian chờ.

Câu 9: Trong mô hình TCP Client/Server, Client dùng hàm tạo (constructor) nào của lớp Socket để chủ động kết nối tới Server?
A. new Socket(String host, int port)
B. new Socket()
C. new Socket(int port)
D. Cả A và B

Đáp án đúng: A
Giải thích: Client khởi tạo Socket và truyền hostname cùng port để hệ thống thiết lập đường truyền TCP trực tiếp tới Server.

Câu 10: Để thiết lập thời gian chờ dữ liệu (timeout) tránh để Socket bị treo vĩnh viễn, ta dùng phương thức nào?
A. setWaitTime()
B. setSoTimeout(int timeout)
C. connect(timeout)
D. close()

Đáp án đúng: B
Giải thích: Phương thức setSoTimeout() thiết lập thời gian sống hoặc chờ dữ liệu tối đa tính bằng mili giây.

Câu 11: Phương thức getLocalPort() của lớp Socket trả về giá trị gì?
A. Cổng đang lắng nghe của máy tính từ xa.
B. Cổng mạng của Gateway.
C. Cổng mà socket bị ràng buộc trên máy cục bộ (local).
D. Số lượng cổng đang mở.

Đáp án đúng: C
Giải thích: Nó trả về số hiệu cổng phía máy nội bộ (local) đang dùng để duy trì kết nối.

Câu 12: Khi lập trình TCP mạng, tại sao máy chủ lại thường chứa vòng lặp `while (true)` bọc lấy phương thức `accept()`?
A. Để liên tục kiểm tra lỗi phần cứng mạng.
B. Để tự động khởi động lại nếu máy chủ sập.
C. Để máy chủ sau khi xử lý xong một client có thể tiếp tục lắng nghe và phục vụ các client khác.
D. Để chiếm dụng tối đa băng thông.

Đáp án đúng: C
Giải thích: Vòng lặp này giúp chương trình Server không bị thoát sau khi phục vụ một client, mà quay lại duy trì trạng thái chờ kết nối tiếp theo.

Câu 13: Ứng dụng client và server cần thống nhất với nhau điều kiện gì khi giao tiếp qua TCP?
A. Phải dùng chung hệ điều hành Windows.
B. Phải thống nhất quy tắc trao đổi dữ liệu (giao thức/thứ tự ghi đọc) để tránh treo hoặc nhận sai thông tin.
C. Phải cùng kết nối bằng cổng số 80.
D. Phải truyền dữ liệu bằng byte[] không qua Stream.

Đáp án đúng: B
Giải thích: Kết nối TCP duy trì dòng luồng, do đó việc gửi-nhận phải nhịp nhàng và thống nhất theo quy tắc hoặc cấu trúc đã quy định trước.

Câu 14: Khi khởi tạo `new ServerSocket(0)`, ServerSocket sẽ được hệ thống gán vào cổng nào?
A. Báo lỗi vì 0 là cổng hệ thống.
B. Sẽ tìm một cổng rảnh ngẫu nhiên chưa được sử dụng bởi hệ điều hành.
C. Cổng 80.
D. Cổng 65535.

Đáp án đúng: B
Giải thích: Truyền 0 vào constructor ServerSocket sẽ ra lệnh cho máy chủ tự động rà soát và cấp phát một cổng còn trống.

Câu 15: Cổng động (dynamic hay private port) có khoảng giá trị từ đâu đến đâu?
A. 0 - 1023
B. 1024 - 49151
C. 49152 - 65535
D. Bất kỳ giá trị nào từ 0 - 65535

Đáp án đúng: C
Giải thích: Dải từ 49152 đến 65535 là các cổng động dùng riêng, các ứng dụng có thể sử dụng mà không cần đăng ký.

Câu 16: Phương thức bind(SocketAddress host, int backlog) của lớp ServerSocket có tác dụng gì?
A. Buộc client ngắt kết nối.
B. Gửi mảng dữ liệu.
C. Liên kết socket tới một địa chỉ mạng và cổng xác định khi socket được tạo không đối số.
D. Thay đổi cổng đang hoạt động sang một cổng khác.

Đáp án đúng: C
Giải thích: bind() thường được sử dụng khi chúng ta dùng constructor rỗng `new ServerSocket()` và cần ràng buộc vào địa chỉ cụ thể sau đó.

Câu 17: Sau khi quá trình trao đổi qua TCP kết thúc, lập trình viên cần làm gì với Socket?
A. Chờ garbage collector tự thu gom.
B. Gọi phương thức close() để giải phóng cổng và tài nguyên hệ thống.
C. Dùng phương thức stop() để đóng tiến trình.
D. Gọi flush() và kết thúc.

Đáp án đúng: B
Giải thích: Gọi close() là thao tác bắt buộc để đóng kết nối mạng, trả lại số hiệu cổng và hủy tài nguyên cấp phát cho socket.

Câu 18: Lỗi nào thường được Java ném ra khi không thể kết nối hoặc cổng đã bị ứng dụng khác chiếm giữ?
A. NumberFormatException
B. IOException
C. SQLException
D. NullPointerException

Đáp án đúng: B
Giải thích: Ngoại lệ IOException là lỗi phổ biến nhất trong nhóm lớp java.net liên quan tới vào/ra dữ liệu qua mạng.

Câu 19: Để tăng tốc độ và khả năng đọc ghi cho TCP, người ta thường bọc InputStream/OutputStream bằng lớp nào?
A. Scanner / PrintWriter
B. FileReader / FileWriter
C. DataReader / DataWriter
D. StringInputStream

Đáp án đúng: A
Giải thích: Lớp Scanner và PrintWriter hỗ trợ đọc ghi dữ liệu các kiểu số, chuỗi dễ dàng và có bộ đệm (buffer) hiệu quả, thường được chuộng trong lập trình mạng TCP.

Câu 20: Lệnh `PrintWriter out = new PrintWriter(sk.getOutputStream(), true);` tham số true có ý nghĩa gì?
A. Mở khóa cho phép gửi dữ liệu.
B. Cho phép kết nối tự động cấu hình lại.
C. Thiết lập tự động đẩy (auto-flush) dữ liệu ra luồng sau mỗi lệnh gọi println.
D. Bật mã hóa bảo mật.

Đáp án đúng: C
Giải thích: Tham số true là autoFlush, tự động đẩy dữ liệu lên đường truyền mỗi khi gửi dòng ký tự mà không cần gọi flush() thủ công.

---

**CHƯƠNG 6: LẬP TRÌNH VỚI GIAO THỨC UDP**

Câu 1: Giao thức UDP là viết tắt của cụm từ nào?
A. Uniform Data Protocol
B. Universal Datagram Protocol
C. User Datagram Protocol
D. Utility Data Protocol

Đáp án đúng: C
Giải thích: UDP là viết tắt của User Datagram Protocol, một giao thức không liên kết hướng tới truyền gửi tốc độ nhanh.

Câu 2: Phát biểu nào sau đây KHÔNG ĐÚNG về giao thức UDP?
A. Không kiểm tra lỗi hay truyền lại gói tin mất.
B. Không đảm bảo gói tin đến theo đúng thứ tự.
C. Đòi hỏi phải thiết lập một kết nối 2 chiều cố định giữa Client và Server trước khi truyền tin.
D. Tốc độ truyền nhanh hơn TCP.

Đáp án đúng: C
Giải thích: Khác với TCP, UDP không tạo ra kết nối giữa 2 máy tính cố định mà gửi dữ liệu qua các gói độc lập.

Câu 3: Các ứng dụng nào thường được ưu tiên sử dụng giao thức UDP?
A. Gửi và nhận thư điện tử (Email).
B. Tải tệp tin quan trọng dung lượng lớn.
C. Duyệt website ngân hàng.
D. Phát video trực tuyến (livestream) và trò chơi trực tuyến.

Đáp án đúng: D
Giải thích: UDP ưu tiên tốc độ, chấp nhận rớt gói tin nhỏ trong streaming và game online để giữ thời gian thực thay vì độ trễ sửa lỗi của TCP.

Câu 4: Số lượng byte tối đa có thể gửi trong một gói tin UDP là bao nhiêu?
A. 1500 byte
B. 8192 byte
C. 65507 byte
D. 65535 byte

Đáp án đúng: C
Giải thích: Kích thước payload lớn nhất thực tế cho DatagramPacket UDP theo cấu trúc của IP là 65507 byte.

Câu 5: Trong lập trình Java, lớp nào đóng vai trò gửi và nhận các gói tin thông qua giao thức UDP?
A. ServerSocket
B. Socket
C. DatagramPacket
D. DatagramSocket

Đáp án đúng: D
Giải thích: Cả phía người gửi và người nhận UDP đều sử dụng DatagramSocket làm kênh để gửi và nhận gói tin mạng.

Câu 6: Lớp DatagramPacket được sử dụng với mục đích chính là gì?
A. Tạo kết nối cố định với máy chủ.
B. Đóng gói dữ liệu (thành packet) mang theo địa chỉ IP và Cổng, hoặc tạo bộ đệm chứa dữ liệu sắp nhận về.
C. Mã hóa dữ liệu đường truyền.
D. Đọc dữ liệu theo dòng vào/ra.

Đáp án đúng: B
Giải thích: DatagramPacket là lớp lưu trữ dữ liệu truyền nhận dạng mảng byte kèm thông tin máy khách.

Câu 7: Khi tạo một `DatagramPacket` với mục đích GỬI dữ liệu đi, constructor bắt buộc phải có những tham số nào?
A. Mảng byte chứa dữ liệu, độ dài dữ liệu, đối tượng InetAddress máy nhận và số cổng.
B. Mảng byte đệm và chiều dài tối đa.
C. Chỉ cần địa chỉ IP máy nhận và cổng.
D. Chuỗi nội dung String và cổng.

Đáp án đúng: A
Giải thích: Gói tin gửi đi cần mang theo dữ liệu (buf, length) và địa chỉ đích (address, port) để hệ thống biết nơi chuyển đến.

Câu 8: Khi tạo một `DatagramPacket` để NHẬN dữ liệu, tham số nào là cần thiết cho constructor?
A. Địa chỉ IP máy gửi và cổng máy gửi.
B. Cổng đích và chiều dài chuỗi gửi.
C. Mảng byte làm vùng nhớ đệm (buffer) và số byte tối đa có thể nhận (length).
D. DatagramSocket để kết nối.

Đáp án đúng: C
Giải thích: Khởi tạo packet nhận chỉ cần chuẩn bị một mảng byte trống để ứng dụng điền thông tin khi nhận gói tin về.

Câu 9: Hàm `receive(DatagramPacket p)` của DatagramSocket có đặc điểm gì?
A. Chỉ chặn kết nối trong 1 giây.
B. Sẽ chặn tiến trình (block) cho đến khi có một gói tin từ mạng bay vào.
C. Luôn trả về true nếu mạng kết nối ổn định.
D. Mở cổng kết nối tương tự accept() của TCP.

Đáp án đúng: B
Giải thích: Phương thức này bị khóa luồng thực thi (block) cho đến khi bắt được 1 DatagramPacket từ mạng gửi tới.

Câu 10: Phương thức `getAddress()` của đối tượng DatagramPacket thu được sau khi hàm receive() kết thúc sẽ trả về gì?
A. Địa chỉ IP của máy chủ DNS.
B. Địa chỉ loopback mặc định.
C. Địa chỉ IP của máy đã gửi gói tin đó.
D. Chuỗi String mã hóa dữ liệu.

Đáp án đúng: C
Giải thích: DatagramPacket nhận về chứa toàn bộ thông tin của máy đối tác bao gồm IP, nhờ vậy server UDP mới biết đích để phản hồi.

Câu 11: Phương thức `getLength()` của đối tượng DatagramPacket sau khi nhận gói tin có ý nghĩa gì?
A. Trả về kích thước mảng buf tối đa.
B. Trả về chiều dài số hiệu cổng.
C. Trả về số byte dữ liệu thực tế chứa trong gói tin.
D. Độ trễ tính bằng mili giây.

Đáp án đúng: C
Giải thích: Kích thước mảng đệm có thể lớn hơn dữ liệu gửi (ví dụ 65507 byte), getLength() giúp lấy chính xác số byte dữ liệu để giải mã.

Câu 12: Client khởi tạo `DatagramSocket sk = new DatagramSocket();` sẽ gây ra hành vi nào?
A. Báo lỗi vì không có tham số cổng.
B. Socket sẽ mở tự do sử dụng một cổng rỗng ngẫu nhiên trên máy khách để liên lạc.
C. Gửi yêu cầu xin cấp cổng từ Server.
D. Lắng nghe ở cổng 0.

Đáp án đúng: B
Giải thích: Constructor không chỉ định cổng được dùng ở máy Client để hệ điều hành tự phân công 1 cổng rảnh cho việc gửi nhận UDP.

Câu 13: Lệnh `socket.send(packet)` có thể ném ra ngoại lệ nào nếu quá trình gửi gặp trục trặc?
A. ArrayOutOfBoundsException
B. NullPointerException
C. IOException
D. NumberFormatException

Đáp án đúng: C
Giải thích: Các hàm thao tác trên mạng (send, receive, close) thông thường sẽ throws IOException.

Câu 14: Ngoại lệ `SocketException` ném ra khi khởi tạo `DatagramSocket(port)` phía Server thường chỉ ra điều gì?
A. Port đó đã bị chương trình khác chiếm dụng.
B. Địa chỉ IP sai định dạng.
C. Kết nối Internet bị mất hoàn toàn.
D. Không đúng phiên bản Java.

Đáp án đúng: A
Giải thích: Tạo Socket gắn với một port sẽ văng lỗi SocketException nếu port đó không khả dụng (đang có dịch vụ khác mở).

Câu 15: Nếu muốn cấu hình thời gian đợi khi nhận gói tin, ta thiết lập thời gian chờ timeout bằng lệnh nào?
A. setSoTimeout(int timeout)
B. sleep(timeout)
C. wait(timeout)
D. receive(timeout)

Đáp án đúng: A
Giải thích: Cũng như TCP, UDP DatagramSocket sử dụng setSoTimeout để đảm bảo hàm receive không bị treo vĩnh viễn nếu mạng lỗi.

Câu 16: Ví dụ để giải mã mảng byte thành chuỗi String từ `rPacket` nhận được, cú pháp nào là chính xác?
A. String s = new String(rPacket);
B. String s = rPacket.toString();
C. String s = new String(rPacket.getData(), rPacket.getOffset(), rPacket.getLength());
D. String s = (String) rPacket;

Đáp án đúng: C
Giải thích: Phương thức này chuyển mảng byte về chuỗi bắt đầu từ vị trí offset và có độ dài bằng lượng byte dữ liệu thực tế thu được.

Câu 17: Phía Server của UDP khác với TCP ở đặc điểm nào sau đây?
A. Server UDP không cần duy trì vòng lặp while.
B. Server UDP không sử dụng một Socket chuyên để "lắng nghe" và sinh ra socket con như ServerSocket, nó dùng chung 1 DatagramSocket cho mọi client.
C. Server UDP bắt buộc phải gọi phương thức accept().
D. Server UDP phải gửi dữ liệu trước khi nhận.

Đáp án đúng: B
Giải thích: Server UDP chỉ cần 1 DatagramSocket gắn vào cổng để hứng DatagramPacket từ mọi nguồn, không sinh socket riêng như TCP.

Câu 18: Sự giống nhau giữa gọi điện thoại và gửi thư giấy thường được dùng để minh hoạ sự khác biệt nào?
A. Gọi điện tương đương TCP, gửi thư tay tương đương UDP.
B. Gọi điện tương đương UDP, gửi thư tương đương TCP.
C. Cả 2 đều minh họa UDP.
D. Cả 2 đều minh họa TCP.

Đáp án đúng: A
Giải thích: TCP cần thiết lập liên lạc 2 chiều như gọi điện thoại, UDP gửi đi nhưng không biết đối tác có nhận được không giống gửi thư tay.

Câu 19: Phương thức `bind(SocketAddress addr)` của DatagramSocket nhằm mục đích gì?
A. Kéo một gói tin về.
B. Đóng socket hiện hành.
C. Ràng buộc socket vào một địa chỉ mạng cụ thể nếu socket được khởi tạo mà chưa chỉ định cổng.
D. Biến đổi Socket TCP thành UDP.

Đáp án đúng: C
Giải thích: bind() cho phép thay đổi hoặc cấp phát tường minh địa chỉ IP, cổng cho DatagramSocket sau khi đã khởi tạo constructor rỗng.

Câu 20: Trong lập trình UDP, nếu máy chủ gửi trả lời cho một máy khách, nó tìm địa chỉ đích ở đâu?
A. Quét toàn bộ hệ thống mạng.
B. Tra cứu qua DNS tự động.
C. Lấy địa chỉ IP và cổng trực tiếp từ đối tượng DatagramPacket mà Client gửi tới.
D. Yêu cầu Client gửi lại thông tin.

Đáp án đúng: C
Giải thích: Packet do client gửi đến sẽ chứa địa chỉ IP và Cổng của Client, server trích xuất thông qua getAddress() và getPort() để làm đích phản hồi.

---

**CHƯƠNG 7: KỸ THUẬT LẬP TRÌNH PHÂN TÁN RMI**

Câu 1: RMI trong Java là viết tắt của thuật ngữ nào?
A. Remote Message Interface
B. Remote Method Invocation
C. Random Memory Interface
D. Routing Multiple Instances

Đáp án đúng: B
Giải thích: RMI (Remote Method Invocation) là kỹ thuật cho phép triệu gọi các phương thức từ xa.

Câu 2: Kỹ thuật RMI có chức năng gì trong Java?
A. Giao tiếp cơ sở dữ liệu.
B. Cách thức giao tiếp giữa các đối tượng phân tán trong Java nằm trên các máy khác nhau để chúng có thể triệu gọi phương thức lẫn nhau.
C. Hỗ trợ đồ hoạ 3D phân tán.
D. Nén dữ liệu truyền thông qua Web.

Đáp án đúng: B
Giải thích: RMI giúp gọi hàm/phương thức của các object không ở cục bộ máy ảo (JVM) hiện hành mà nằm tại máy tính ở xa.

Câu 3: Trong mô hình truyền thông RMI, lớp trung gian được tự động sinh ra phục vụ phía Client gọi là gì?
A. Registry
B. Naming
C. Skeleton (Skel)
D. Stub

Đáp án đúng: D
Giải thích: Stub nằm ở client đóng vai trò làm proxy chuyển tiếp yêu cầu triệu gọi qua mạng.

Câu 4: Tương ứng với Stub ở máy khách, lớp trung gian nào ở phía Server để tiếp nhận thông tin từ Client?
A. Naming Server
B. Skeleton (Skel)
C. RMI Registry
D. UnicastRemoteObject

Đáp án đúng: B
Giải thích: Skeleton dùng ở Server chịu trách nhiệm bóc tách thông số mạng rồi kích hoạt phương thức tương ứng trên Remote Object.

Câu 5: Trong thiết kế hệ thống RMI, Interface (Giao diện) khai báo các phương thức từ xa buộc phải kế thừa lớp nào?
A. java.io.Serializable
B. java.rmi.server.UnicastRemoteObject
C. java.rmi.Remote
D. java.lang.Runnable

Đáp án đúng: C
Giải thích: Lớp interface bắt buộc phải kế thừa (extends) `java.rmi.Remote` để RMI nhận diện đây là một khai báo giao diện cho truy cập từ xa.

Câu 6: Các phương thức được định nghĩa trong Interface RMI đều phải throws loại ngoại lệ nào?
A. IOException
B. RemoteException
C. ClassNotFoundException
D. IllegalArgumentException

Đáp án đúng: B
Giải thích: Bất cứ lỗi nào xảy ra do ngắt mạng hoặc thất bại trong giao tiếp từ xa đều sẽ tung ra ngoại lệ `RemoteException`.

Câu 7: Lớp triển khai các phương thức được định nghĩa trong Remote interface (Remote implementation) thường kế thừa (extends) lớp nào?
A. RuntimeException
B. TCP Socket
C. UnicastRemoteObject
D. Thread

Đáp án đúng: C
Giải thích: Kế thừa UnicastRemoteObject để class đó trở thành một Remote Object thực sự, chịu trách nhiệm lắng nghe kết nối đến qua cổng của RMI.

Câu 8: Ở Server, thành phần nào có nhiệm vụ quản lý, lưu trữ và ánh xạ tên của một Remote Object với object thực tế để Client có thể tìm thấy?
A. SQL Database
B. RMI Registry (Bộ đăng ký)
C. Lớp Stub
D. Trình biên dịch (Compiler)

Đáp án đúng: B
Giải thích: Bộ đăng ký giúp ánh xạ (bind) tên chuỗi (ví dụ "PrimeService") với đối tượng Remote để Client thông qua đó truy xuất.

Câu 9: Giao thức truyền tin mặc định nằm bên dưới cơ chế của RMI là gì?
A. Datagram UDP
B. Các TCP Socket
C. ICMP Ping
D. SMTP

Đáp án đúng: B
Giải thích: Việc truyền dữ liệu xuyên thấu giữa 2 máy ảo JVM thông qua RMI được Java thiết lập dựa trên kết nối TCP Socket ẩn.

Câu 10: Quy trình bước 1 (cơ bản nhất) để xây dựng ứng dụng theo mô hình RMI là gì?
A. Tạo một Registry trên một cổng cụ thể.
B. Gọi hàm `lookup` trên Client.
C. Tạo project và định nghĩa Interface (giao diện) chứa các phương thức cần gọi dùng chung cho cả Client và Server.
D. Thiết kế giao diện đồ hoạ cho Client.

Đáp án đúng: C
Giải thích: Interface định nghĩa chung là bản hợp đồng bắt buộc cần phải có ở cả 2 project Server và Client để xác định các hàm hỗ trợ.

Câu 11: Để tự động sinh một Registry nội bộ ngay trong chương trình phía Server ở cổng 3210, câu lệnh nào được dùng?
A. LocateRegistry.getRegistry("localhost", 3210);
B. LocateRegistry.createRegistry(3210);
C. new Registry(3210);
D. System.out.setPort(3210);

Đáp án đúng: B
Giải thích: Lớp LocateRegistry cung cấp phương thức static createRegistry(port) để bật dịch vụ đăng ký RMI ngay bên trong chương trình Server.

Câu 12: Để gắn/đăng ký dịch vụ đối tượng của lớp `Prime` với cái tên `"PrimeService"`, Server RMI dùng lệnh nào?
A. reg.rebind("PrimeService", new Prime());
B. reg.lookup("PrimeService");
C. reg.register("Prime", "PrimeService");
D. reg.insert("PrimeService", new Prime());

Đáp án đúng: A
Giải thích: `rebind()` (hoặc bind()) thực hiện liên kết đối tượng từ xa vào bảng tên của Registry.

Câu 13: Để lấy Registry từ Server đang chạy ở địa chỉ host và cổng port, Client sẽ sử dụng lệnh nào?
A. LocateRegistry.createRegistry(port)
B. Naming.lookup(host)
C. LocateRegistry.getRegistry(host, port)
D. Runtime.getRegistry()

Đáp án đúng: C
Giải thích: Lệnh getRegistry trả về bộ định tuyến tham chiếu trỏ tới Registry trên Server, qua đó có thể tìm các Service.

Câu 14: Ở máy khách (Client), sau khi lấy được đối tượng Registry, phương thức nào được dùng để tìm và gán đối tượng phục vụ từ xa?
A. fetch()
B. getService()
C. rebind()
D. lookup()

Đáp án đúng: D
Giải thích: Phương thức lookup("Tên_Dịch_Vụ") truy vấn trong RMI Registry và trả lại stub của Remote Object để gọi hàm.

Câu 15: Ngoại lệ `NotBoundException` thường bị văng ra trong hoàn cảnh nào ở RMI?
A. Khi Server chưa mở port 3210.
B. Khi mảng dữ liệu truyền qua hàm vượt quá bộ đệm.
C. Khi Client dùng phương thức lookup tìm một dịch vụ chưa được đăng ký (không khớp tên) ở Registry.
D. Lỗi do mạng chập chờn.

Đáp án đúng: C
Giải thích: Không tìm thấy dịch vụ tương ứng với tên truy vấn trong Registry sẽ sinh ra lỗi chưa được gắn kết (NotBoundException).

Câu 16: Một trong những đặc tính vượt trội của RMI so với Socket đơn thuần là gì?
A. Chỉ mã hoá dạng String.
B. RMI truyền nhận dữ liệu theo dạng byte thô như Socket UDP.
C. RMI xử lý truyền dữ liệu phân tán một cách trong suốt, gọi phương thức trên đối tượng ở xa y như đối tượng cục bộ.
D. RMI không bao giờ dính lỗi mạng.

Đáp án đúng: C
Giải thích: Cấu trúc lớp trung gian ẩn đi việc điều hướng gói tin mạng TCP, cho phép lập trình viên chỉ cần chú tâm vào logic phương thức và đối tượng.

Câu 17: RMI có cho phép một hàm từ xa trả về các kiểu dữ liệu phức tạp ngoài số và chuỗi không?
A. Không, chỉ hỗ trợ số (int, double).
B. Không, chỉ hỗ trợ String và int.
C. Có, nhưng người lập trình phải tự viết mã byte dịch.
D. Có, thông qua cơ chế Serialize của Java.

Đáp án đúng: D
Giải thích: Miễn là các đối tượng tham số truyền vào hay trả về thoả mãn thuộc tính Serialize (java.io.Serializable), hệ thống JVM có thể tuần tự hóa/chuyển đổi qua lại trơn tru.

Câu 18: Lệnh `(NumberInterface)reg.lookup("NumberService");` thực hiện chức năng gì?
A. Ép kiểu object trả về từ máy chủ thành chuẩn Interface, tạo đối tượng stub ở Client.
B. Kiểm tra xem NumberService có bị lỗi mạng không.
C. Xóa dịch vụ NumberService.
D. Gửi con số qua mạng.

Đáp án đúng: A
Giải thích: lookup trả về Object, phải được ép kiểu rõ ràng về Interface dùng chung để gọi đúng các phương thức.

Câu 19: Lập trình RMI có cơ chế "callback", cơ chế này cho phép điều gì?
A. Máy khách gửi dữ liệu nặc danh.
B. Máy chủ triệu gọi ngược lại các phương thức nằm ở máy khách (Client).
C. Tự động sao lưu bộ nhớ.
D. Tự sửa mã nguồn bị lỗi.

Đáp án đúng: B
Giải thích: RMI hỗ trợ Callback, nghĩa là Client có thể truyền Remote Object của nó cho Server, Server nắm được Stub và có thể gọi ngược phương thức thực thi trên Client.

Câu 20: Tác dụng của từ khóa `implements` khi viết lớp `Server Class` (vd: StringClass implements StringInterface)?
A. Đánh dấu Server chỉ dùng được Socket UDP.
B. Đăng ký tên cho dịch vụ.
C. Buộc lớp Server phải thực hiện cụ thể (hiện thực mã) cho các phương thức trừu tượng đã định nghĩa trong RMI Interface.
D. Bỏ qua cấu trúc RMI.

Đáp án đúng: C
Giải thích: Java Interface chỉ khai báo, lớp implement đóng vai trò hiện thực chức năng logic từ xa cho các khai báo đó.
"""

questions = []

blocks = raw_text.split("Câu ")
for block in blocks[1:]: # skip first empty or header
    lines = block.strip().split('\n')
    
    question_text = ""
    options = []
    answer_idx = 0
    explanation = ""
    
    # Process lines
    q_match = re.match(r"(\d+):\s*(.*)", lines[0])
    if q_match:
        question_text = q_match.group(2).strip()
    else:
        question_text = lines[0].strip()

    opt_idx = 0
    for line in lines[1:]:
        line = line.strip()
        if not line:
            continue
        if re.match(r"^[A-D]\.", line):
            options.append(line)
        elif line.startswith("Đáp án đúng:"):
            ans_letter = line.split(":")[1].strip()
            answer_idx = ord(ans_letter) - ord('A')
        elif line.startswith("Giải thích:"):
            explanation = line.split(":", 1)[1].strip()

    if question_text and options:
        questions.append({
            "question": question_text,
            "options": options,
            "answer": answer_idx,
            "explanation": explanation
        })

js_code = "const quizData = " + json.dumps(questions, ensure_ascii=False, indent=2) + ";"

with open("data.js", "w", encoding="utf-8") as f:
    f.write(js_code)

print(f"Exported {len(questions)} questions")
