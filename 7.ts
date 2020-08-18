// function xemtt(motNguoi : {tuoi:number, ten:string}): void {
//     console.log(`
//     Xin chào, ${motNguoi.ten} năm nay bạn ${motNguoi.tuoi} tuổi phải không?
    
//     `)
// }
// xemtt({tuoi:40, ten:"Việt"});

// sử dụng Interface

interface nguoi {
    tuoi?: number;// ? tuoi co the co hoac khong
    ten : string;

}
function xemtt (motNguoi : nguoi): void {
    console.log(`
    Xin chào, ${motNguoi.ten} năm nay bạn ${motNguoi.tuoi} tuổi phải không?
    
    `)
}
xemtt({ten:"Việt"});