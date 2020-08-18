// function xemtt(motNguoi : {tuoi:number, ten:string}): void {
//     console.log(`
//     Xin chào, ${motNguoi.ten} năm nay bạn ${motNguoi.tuoi} tuổi phải không?
var Tuong = /** @class */ (function () {
    function Tuong() {
    }
    Tuong.prototype.xemTuong = function () {
        console.log("Xem");
    };
    ;
    Tuong.prototype.donSatThu = function (mau) {
        return " Don ki nang";
    };
    ;
    Tuong.prototype.bienVe = function () {
        console.log(" bien ve");
    };
    ;
    Tuong.prototype.Huydiet = function () {
        console.log("huy diet");
    };
    ;
    return Tuong;
}());
// spacename, export
// Module la tap hop gom nhom cac class, no la dang hop dong kin
//Muon lay ra ngoai phai dung tu khoa export truoc class
var Adroid;
(function (Adroid) {
    var String = /** @class */ (function () {
        function String() {
        }
        return String;
    }());
    Adroid.String = String;
    var Number = /** @class */ (function () {
        function Number() {
        }
        return Number;
    }());
    Adroid.Number = Number;
})(Adroid || (Adroid = {}));
var coca = new Adroid.String();
var pepsi = new Adroid.Number();
