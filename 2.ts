// Lý thuyết lập trình hướng đối tương
// Lap trinh xung quanh doi tuong
// neu không lập trình theo hướng đối tượng 
//Còn có lập trình theo cấu trúc, lập trình thủ tục(biến toàn cục, du án nhỏ, khó bảo trì..)
/* Lập trình theo hướng đối tượng là gì:
+ Chương trình dduocj chia thành các đối tượng độc lập
+ Dữ liệu được che dấu hoặc hiển thị bởi các phương thức truy xuất
+ Các đối tượng trao đổi với nhau thông qua các hàm. lúc này các hàm dduocj gọi là phương thức
Bao gồm nhiều biến, tham số
+ Chương trình được thiết kế theo hướng tiếp cận từ dưới lên
+ Tái sử dụng code dễ dàng hơn
*/
/* Các đặ điểm của lập trình hướng đối tượng:
1.Trừu tượng hóa
là việc xác định các thuộc tính, phương thức cần thiết cho đối tượng của 1 class
Kết quả của trừu tượng hóa chính là bản thiết kế của 1 class
2. Tính thừa kế: extend
1 class có thể kế thừa các thuộc tính, phương thức của 1 class khác
Nhằm tiết kiệm CODE và không gian bộ nhớ
3.Tính đa hình: (abstract, interface)
là kế thừa và viết lại các thuộc tính 1 cách chi tiết hơn, phương thức 1 cách chi tiết hơn của các lớp khác cho kết quả 1 lớp class mới
thiết kế class (interface  dành cho property - thuộc tính
                abstract dùng cho phương thức -method)
4. Tính đóng gói (accessmodifier , statis)
là tính chất cho phép hay không người dùng hay đối tượng khác thay đổi
dữ liệu của đối tượng hiện tại
*/

// vi du class
// contructor la ham void
class nhan_vat_game{
 ten_nhan_vat:string;
 slogan:string;
 mau :number;
// constructor tao ra instance
 constructor(ten_nhan_vat:string ,slogan :string, mau: number){
     this.ten_nhan_vat = ten_nhan_vat;
     this.slogan = slogan;
     this.mau = mau;
 }
 chay(){}
 chem(){}
 hienthiten(){
     return `Nhân vật: ${this.ten_nhan_vat}, 
     slogan: ${this.slogan} , 
     chỉ số máu là: ${this.mau}`;
 }
}
var nhanvat1 = new nhan_vat_game("Akali", "Sát Thủ Đơn Độc",635);
var nhanvat2 = new nhan_vat_game("Azir", "Hoàng Đế Sa Mac",644);

// class Dien thoai

class dienthoai{
    ten:string;
    gia:number;
    sao:number;
    mausac:string[];

    constructor(ten:string, gia:number, sao:number,mausac:string[]){
    this.ten = ten;
    this.gia = gia;
    this.sao = sao;
    this.mausac = mausac
}
showNoidung(){
    return `San pham: ${this.ten}, 
    gia la: ${this.gia},
    danh gia: ${this.sao} sao
    voi ${this.mausac.length} mau noi bat:
    ${this.mausac[0]}, ${this.mausac[1]}, ${this.mausac[2]} `;
}
}
var sp1 = new dienthoai("sam sung S8",1900,4,["do","den","trang"])
console.log(sp1.showNoidung());

