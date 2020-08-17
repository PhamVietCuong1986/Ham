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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// vi du class
// contructor la ham void
// class nhan_vat_game{
//  ten_nhan_vat:string;
//  slogan:string;
//  mau :number;
// // constructor tao ra instance
//  constructor(ten_nhan_vat:string ,slogan :string, mau: number){
//      this.ten_nhan_vat = ten_nhan_vat;
//      this.slogan = slogan;
//      this.mau = mau;
//  }
//  chay(){}
//  chem(){}
//  hienthiten(){
//      return `Nhân vật: ${this.ten_nhan_vat}, 
//      slogan: ${this.slogan} , 
//      chỉ số máu là: ${this.mau}`;
//  }
// }
// var nhanvat1 = new nhan_vat_game("Akali", "Sát Thủ Đơn Độc",635);
// var nhanvat2 = new nhan_vat_game("Azir", "Hoàng Đế Sa Mac",644);
// // class Dien thoai
// class dienthoai{
//     ten:string;
//     gia:number;
//     sao:number;
//     mausac:string[];
//     constructor(ten:string, gia:number, sao:number,mausac:string[]){
//     this.ten = ten;
//     this.gia = gia;
//     this.sao = sao;
//     this.mausac = mausac
// }
// showNoidung(){
//     return `San pham: ${this.ten}, 
//     gia la: ${this.gia},
//     danh gia: ${this.sao} sao
//     voi ${this.mausac.length} mau noi bat:
//     ${this.mausac[0]}, ${this.mausac[1]}, ${this.mausac[2]} `;
// }
// }
// var sp1 = new dienthoai("sam sung S8",1900,4,["do","den","trang"])
// console.log(sp1.showNoidung());
// //
// class congViec {
//       id : number;
//       ten : string;
//       trangthai: string;
//     constructor(id:number, ten:string,trangthai:string) {
//         this.id = id;
//         this.ten = ten;
//         this.trangthai = trangthai;
//     }
//     thongTin(){
//         return ` cong viec ${this.id} - ${this.ten} - trang thai: ${this.trangthai}`;
//     }
// }
// let cv1 = new congViec(1, "hoc HTML", "Dang hoc");
// console.log(cv1.thongTin());
// // Ket hop class va enum
// enum state{
//     Create = 10,
//     Processing,
//     Finish
// }
// class congViec {
//     id : number;
//     ten : string;
//     trangthai: state;
//   constructor(id:number, ten:string,trangthai:state) {
//       this.id = id;
//       this.ten = ten;
//       this.trangthai = trangthai;
//   }
//   thongTin(){
//       return ` cong viec ${this.id} - ${this.ten} - trang thai: ${this.trangthai}`;
//   }
// }
// let cv1 = new congViec(1, "hoc HTML", state.Create);
// console.log(cv1.thongTin());
/*II. Y NGHIA CUA static trong lap trinh huong doi tuong
Giup nguoi lap trinh phan quyen truy xuat
Static truy nhap vao 1 gia tri (property)
Static truy nhap vao 1 phuong thuc (ham method)
giup ta su dung thuoc tinh, phuong thuc cua 1 class
ma khong can phai tao 1 instance moi
*/
// enum state{
//     Create = 10,
//     Processing,
//     Finish
// }
// class congViec {
//     static id : number =11;
//    static ten : string = "viec so 11";
//     trangthai: state;
//   constructor(id:number, ten:string,trangthai:state) {
//       this.id = id;
//       this.ten = ten;
//       this.trangthai = trangthai;
//   }
//   thongTin(){
//       return ` cong viec ${this.id} - ${this.ten} - trang thai: ${this.trangthai}`;
//   }
//   static kiemthustatic(){
//       return `kiem tra truy nhap ham static vao phuong thuc - ham method`;
//   }
// }
// // khoi tao 1 doi tuong tu class (instance) 
// let cv1 = new congViec(1, "hoc HTML", state.Create);
// console.log(cv1.thongTin());
// // Static khong can tao instance ma van co the truy cap duoc
// // thuoc tinh va phuong thuc cua 1 class
// console.log(congViec.id);
// console.log(congViec.ten);
// console.log(congViec.kiemthustatic());
/* III. TÍNH KẾ THỪA
+ kế thừa các thuộc tính, phương thức của class bố
+
*/
//https://lienminh.garena.vn/game-info/champions
// phần tìm kiếm tướng có các lớp kế thừa của lớp class Tướng {
// sat thu, ho tro, xạ thủ, pháp sư,...
//}
// vi du tinh ke thua
var Tuong = /** @class */ (function () {
    function Tuong(ten, motatuong, kinang) {
        this.ten = ten;
        this.motatuong = motatuong;
        this.kinang = kinang;
    }
    Tuong.prototype.showThongTin = function () {
        var kn = ''; // khai bao gia tri mac dinh cho bien khong thong bao loi undefined ki nang 1
        for (var i = 0; i < this.kinang.length; i++) {
            kn += this.kinang[i];
            kn += " / ";
        }
        return " \n        ten tuong: " + this.ten + ",\n        mo ta tuong: " + this.motatuong + "\n        ki nang : " + kn + " \n        ";
    };
    return Tuong;
}());
var satthu = /** @class */ (function (_super) {
    __extends(satthu, _super);
    function satthu(ten, motatuong, kinang, donsatthu) {
        var _this = _super.call(this, ten, motatuong, kinang) || this;
        _this.donsatthu = donsatthu;
        return _this;
    }
    satthu.prototype.showThongTin = function () {
        var kn = ''; // khai bao gia tri mac dinh cho bien khong thong bao loi undefined ki nang 1
        for (var i = 0; i < this.kinang.length; i++) {
            kn += this.kinang[i];
            kn += " / ";
        }
        return " \n        ten tuong: " + this.ten + ",\n        mo ta tuong: " + this.motatuong + "\n        ki nang : " + kn + ",\n        Don sat thu: " + this.donsatthu + " \n        ";
    };
    return satthu;
}(Tuong));
var Talon = new satthu("Talon", "Sát Thủ Bóng Đêm", ["Lưỡi Dao Kết Liễu",
    "Ngoại Giao Kiểu Noxus", "Ám Khí", "Con Đường Thích Khách"], "Sát Thủ Vô Hình");
var t1 = new Tuong("Ashe", "Cung Băng", ["Băng Tiễn", "Chú Tâm Tiễn",
    "Lửa Hồ Li", "Hôn Gió", "Phi Hồ"]);
var t2 = new Tuong("Ahri", "Hồ Li Chín Đuôi", ["TMị Lực Vastaya ", "Quả Cầu Ma Thuật",
    "Tán Xạ Tiễn", "Ưng Tiễn", "Đại Băng Tiễn"]);
// console.log(t1.showThongTin());
// console.log(t2.showThongTin());
console.log(Talon.showThongTin());
