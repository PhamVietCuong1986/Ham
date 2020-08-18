// function xemtt(motNguoi : {tuoi:number, ten:string}): void {
//     console.log(`
//     Xin chào, ${motNguoi.ten} năm nay bạn ${motNguoi.tuoi} tuổi phải không?
    
//     `)
// }
// xemtt({tuoi:40, ten:"Việt"});

// sử dụng Interface

// interface nguoi {
//     tuoi?: number;// ? tuoi co the co hoac khong
//     ten : string;

// }
// function xemtt (motNguoi : nguoi): void {
//     console.log(`
//     Xin chào, ${motNguoi.ten} năm nay bạn ${motNguoi.tuoi} tuổi phải không?
    
//     `)
// }
// xemtt({tuoi:40, ten:"Việt"});

// Vidu Interface trong class

interface dacDiemTuong {
    ten: string;
    mau : number;
    satThuong : number;
    moTa: string;

    xemTuong() :void;
    donSatThu(mau:number) : any;
    bienVe() : void;
}

class Tuong implements dacDiemTuong {
    ten: string;
    mau : number;
    satThuong : number;
    moTa: string;
    Slogan : string;

    xemTuong() :void{
        console.log("Xem")
    };
    donSatThu(mau:number) : any{
        return " Don ki nang";
    };
    bienVe() : void {
        console.log(" bien ve");
    };
    Huydiet() :void {
        console.log("huy diet");
    };
}

// spacename, export
// Module la tap hop gom nhom cac class, no la dang hop dong kin
//Muon lay ra ngoai phai dung tu khoa export truoc class
module Adroid {
    export class String {

    }
    export class Number {

    }

}

var coca = new Adroid.String();
var pepsi = new Adroid.Number();
