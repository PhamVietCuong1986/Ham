/* IV. ACCESS MODIFIER
Hoc su dung 3 tu khoa PUBLIC, PRIVATE, PROTECTED
Dat quyen truy cap cho tung phan tu, tung thuoc tinh, tung phuong thuc ham
*/
// vi du bai tap Access modifier
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
var khoahoc = /** @class */ (function () {
    function khoahoc(id, ten, dodai) {
        this.id = id;
        this.ten = ten;
        this.dodai = dodai;
    }
    khoahoc.prototype.xemkhoahoc = function () {
        console.log(this.ten);
        console.log("ID khoa hoc: " + this.id + "\n            Ten khoa hoc: " + this.ten + "\n            Do dai khoa hoc: " + this.dodai + "          \n            ");
    };
    khoahoc.prototype.test2 = function () {
        console.log(this.ten);
    };
    return khoahoc;
}());
var khoalaptrinh = /** @class */ (function (_super) {
    __extends(khoalaptrinh, _super);
    function khoalaptrinh(id, ten, dodai, filedinhkem) {
        var _this = _super.call(this, id, ten, dodai) || this;
        _this.filedinhkem = filedinhkem;
        return _this;
    }
    khoalaptrinh.prototype.xemkhoahoc = function () {
        _super.prototype.xemkhoahoc.call(this);
        console.log("File dinh kem: " + this.filedinhkem);
    };
    khoalaptrinh.prototype.test1 = function () {
        console.log(this.ten);
    };
    return khoalaptrinh;
}(khoahoc));
// test tu khoa Public khai bao thuoc tinh property 
// trong class
var khoa01 = new khoahoc(8, "hoc lam banner", 6);
var khoalaptrinh04 = new khoalaptrinh(4, "khoa hoc lap trinh c#", 12, "tai lieu lap trinh doi tuong");
//  khoalaptrinh04.test1();
//  khoa01.test2();
khoalaptrinh04.test1();
