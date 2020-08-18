// cách lấy kết quả để sử dung OPP của 1 class không quan tâm đến chi tiết code. 
//chỉ quan tâm kết quả class, thể hiện lấy kết quả của class
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
// Abstract la bản mô hình mẫu của 1 class, không sư sụng được
var dienThoai = /** @class */ (function () {
    function dienThoai() {
    }
    dienThoai.prototype.guiTinNhan = function () {
        console.log("Gui tin nhan");
    };
    dienThoai.prototype.goiDien = function () {
        console.log(" Goi dien thoai");
    };
    return dienThoai;
}());
// Muốn sử dung được khai báo 1 class kế thừa mô hình mẫu của ABSTRACT
var androi = /** @class */ (function (_super) {
    __extends(androi, _super);
    function androi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return androi;
}(dienThoai));
var samSung = new androi();
samSung.goiDien();
samSung.guiTinNhan();
