function xem(x) {
    return x;
}
function xem1(x) {
    return x;
}
function xem2(x) {
    return x;
}
// Generic funtion thong thuong
// function xem3<T>(x:T):T{
//     return x;
// }
// console.log(xem(10));
// console.log(xem3<boolean>(true);
// Generic funtion trong Class
var MayTinh = /** @class */ (function () {
    function MayTinh() {
    }
    MayTinh.xemThongTin = function (x) {
        console.log(x);
    };
    return MayTinh;
}());
// Su dung Static nen truy van truc tiep khong can khai bao doi tuong Instance
// MayTinh.xemThongTin<string>(["Dell", "HP", "Asus"]);
// MayTinh.xemThongTin<any>(["Dell",5000,"HP"]);
var OpDienThoai = /** @class */ (function () {
    function OpDienThoai(id, ten, gia) {
        this.id = id;
        this.ten = ten;
        this.gia = gia;
    }
    // xem() : voi{
    //     console.log(
    //         `ID ốp là: ${this.id}
    //         Ốp tên là: ${this.ten}
    //         Ốp có giá là: ${this.gia}
    //         `
    //     )
    // }
    // Hoac ham ma khong khai bao VOID thi phai khai bao kieu Return
    OpDienThoai.prototype.xem = function () {
        return "\n        ID \u1ED1p l\u00E0: " + this.id + "\n        \u1ED0p t\u00EAn l\u00E0: " + this.ten + "\n        \u1ED0p c\u00F3 gi\u00E1 l\u00E0: " + this.gia + "\n        ";
    };
    return OpDienThoai;
}());
// khai bao instance - đối tượng
var op1 = new OpDienThoai(1, "Con Tho", 50000);
// Khai bao ham Xem():VOID
// op1.xem();
//Khong khai bao ham Xem() khac kieu void
console.log(op1.xem());
