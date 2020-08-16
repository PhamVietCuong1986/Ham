// var x : number;
// x = 10;
// console.log(x);
// // funtion khai bao kieu du lieu cho gia tri  ham tra ve
// // ham tra ve gia tri kieu number
// function tinhtong() :number{
//     return 100+200
// }
// console.log(tinhtong());
// // ham tra ve gia tri kieu string
//  function hamstring() : string {
//      return "chao buoi sang";
//  }
//  console.log(hamstring());
//  // ham tra ve mang
//  function mang():string[]{
//      return ["nam", "an","tiep"];
//  }
//  console.log(mang();
//  )
// khai bao ham kieu doi tuong
// khai bao kieu truyen thong JS khong thuc thi duoc
//   function game() : any{
//       var nhanvatgame{
//           ten: "chuot",
//           kynang:{
//               kynang1:"nhanh",
//               kynang2:"tang hinh"
//           }
//       }
//       return nhanvatgame;
//   }
//   console.log(game());
// khai bao ham kieu doi tuong
// khai bao kieu moi thi JS moi thuc thi duoc
function game() {
    return { ten: "chuot",
        kynang: {
            kynang1: "nhanh",
            kynang2: "tang hinh"
        }
    };
}
console.log(game());
