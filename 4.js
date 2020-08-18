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
var Tuong = /** @class */ (function () {
    function Tuong(_ten) {
        this._ten = _ten;
    }
    Object.defineProperty(Tuong.prototype, "ten", {
        get: function () {
            return this._ten;
        },
        set: function (v) {
            this._ten = v;
        },
        enumerable: false,
        configurable: true
    });
    return Tuong;
}());
var zenus = new Tuong("zenus"); // lay gia tri thong qua ham get tra lai gia tri
console.log("Ten tuong la: " + zenus.ten);
zenus.ten = "Than zenus"; // lay gia tri thong qua ham set dat lai gia tri
console.log("Ten tuong la: " + zenus.ten);
