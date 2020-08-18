// function xem(x:number) : number{
//     return x;
// }
// function xem1(x:string) : string{
//     return x;
// }
// function xem2(x:boolean) : boolean{
//     return x;
// }
// Generic funtion thong thuong
// function xem3<T>(x:T):T{
//     return x;
// }
// console.log(xem(10));
// console.log(xem3<boolean>(true);
// Generic funtion trong Class
// class MayTinh {
//    static xemThongTin<T>(x:T[]) : void{// log phai kieu voi, con neu khong dung return
//        console.log(x);
//    }
// }
// // Su dung Static nen truy van truc tiep khong can khai bao doi tuong Instance
// // MayTinh.xemThongTin<string>(["Dell", "HP", "Asus"]);
// // MayTinh.xemThongTin<any>(["Dell",5000,"HP"]);
// class OpDienThoai {
//     id :number;
//     ten : string;
//     gia : number;
//     constructor(id:number,ten:string,gia:number) {
//         this.id = id;
//         this.ten = ten;
//         this.gia = gia;
//     }
// xem() : voi{
//     console.log(
//         `ID ốp là: ${this.id}
//         Ốp tên là: ${this.ten}
//         Ốp có giá là: ${this.gia}
//         `
//     )
// }
// Hoac ham ma khong khai bao VOID thi phai khai bao kieu Return
//     xem(){
//         return `
//         ID ốp là: ${this.id}
//         Ốp tên là: ${this.ten}
//         Ốp có giá là: ${this.gia}
//         `
//     }
// }
// // khai bao instance - đối tượng
// var op1 = new OpDienThoai(1,"Con Tho",50000);
// // Khai bao ham Xem():VOID
// // op1.xem();
// //Khong khai bao ham Xem() khac kieu void
// console.log(op1.xem());
// CLASS generic
// Là class có khả năng truyền các kiểu dữ liệu cho các đối số bên trong class
var OpDienThoai = /** @class */ (function () {
    function OpDienThoai(id, ten, gia) {
        this.id = id;
        this.ten = ten;
        this.gia = gia;
    }
    OpDienThoai.prototype.xem = function () {
        return "\n        ID \u1ED1p l\u00E0: " + this.id + "\n        \u1ED0p t\u00EAn l\u00E0: " + this.ten + "\n        \u1ED0p c\u00F3 gi\u00E1 l\u00E0: " + this.gia + "\n        ";
    };
    return OpDienThoai;
}());
// khai bao instance - đối tượng
var op1 = new OpDienThoai(1, "Con Tho", 50000);
console.log(op1.xem());
var op2 = new OpDienThoai(2, "Xiaxao", "10 Usd");
console.log(op2.xem());
