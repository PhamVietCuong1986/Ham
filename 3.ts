/* IV. ACCESS MODIFIER
Hoc su dung 3 tu khoa PUBLIC, PRIVATE, PROTECTED 
Dat quyen truy cap cho tung phan tu, tung thuoc tinh, tung phuong thuc ham
*/
// vi du bai tap Access modifier

class khoahoc{
    public id:number;
    protected ten:string;
    public dodai:number;
    constructor(id:number,ten:string,dodai:number){
        this.id = id;
        this.ten = ten;
        this.dodai = dodai;

    }
    xemkhoahoc(){
        console.log(this.ten);
        console.log(
            `ID khoa hoc: ${this.id}
            Ten khoa hoc: ${this.ten}
            Do dai khoa hoc: ${this.dodai}          
            `
        );
    }
    test2(){
        console.log(this.ten);
    }
}
class khoalaptrinh extends khoahoc{
    public filedinhkem: string;

    constructor(id:number,ten:string,dodai:number,filedinhkem:string) {
        super(id,ten,dodai);
        this.filedinhkem = filedinhkem;

    }
    xemkhoahoc(){
        super.xemkhoahoc();
        console.log("File dinh kem: "+ this.filedinhkem);
    }
    test1(){
        console.log(this.ten);
    }
}
// test tu khoa Public khai bao thuoc tinh property 
// trong class
 var khoa01 = new khoahoc(8,"hoc lam banner",6);
 var khoalaptrinh04 = new khoalaptrinh(4,"khoa hoc lap trinh c#",12,"tai lieu lap trinh doi tuong");
 
//  khoalaptrinh04.test1();
//  khoa01.test2();
 khoalaptrinh04.test1() 





