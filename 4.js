// xem video khoa hoc nay can co mat khau cua nguoi tao video khoa hoc
// Day chinh la ACCESSOR
// ACCESOR la phuong thuc su dung ham lai tao giữa PUBLIC VÀ PRIVATE
// Co the truy cap duoc nhu Public de dang và bao mat tot nhu Private
// class Tuong {
//     public ten : string;
//     constructor(ten:string) {
//         this.ten = ten;
//     }
// }
// var zenus = new Tuong("zenus");
// console.log("Ten tuong la: " + zenus.ten);
// su dung accessor
// class Tuong {
//     private _ten : string;
//     constructor(_ten:string) {
//         this._ten = _ten;
//     }
//     public get ten() : string {
//         //tao mat khau
//         // tao 1 so ham dieu kien
//         return  this._ten;
//     }
//     public set ten(v : string) {
//         // them 1 so ham dieu kien
//         this._ten = v;
//     }
// }
// var zenus = new Tuong("zenus");// lay gia tri thong qua ham get tra lai gia tri
// console.log("Ten tuong la: " + zenus.ten);
// zenus.ten = "Than zenus";// lay gia tri thong qua ham set dat lai gia tri
// console.log("Ten tuong la: " + zenus.ten);
// su dung get, set de cai dat mat khau
var matkhau = "Anh Viet cho so";
var Nguoi = /** @class */ (function () {
    function Nguoi() {
    }
    Object.defineProperty(Nguoi.prototype, "ten", {
        get: function () {
            if (matkhau == "Anh Viet cho so") {
                return this._ten;
            }
            else {
                return " sai mat khau roi nhe";
            }
        },
        set: function (v) {
            if (matkhau == "Anh Viet cho so") {
                this._ten = v;
            }
            else {
                this._ten = "Sai mat khau";
            }
        },
        enumerable: false,
        configurable: true
    });
    return Nguoi;
}());
var Nguoiso1 = new Nguoi();
matkhau = "Anh Viet cho so";
Nguoiso1.ten = "Viet ND"; //set
console.log(Nguoiso1.ten);
