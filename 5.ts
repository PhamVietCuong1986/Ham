// cách lấy kết quả để sử dung OPP của 1 class không quan tâm đến chi tiết code. 
//chỉ quan tâm kết quả class, thể hiện lấy kết quả của class

// Abstract la bản mô hình mẫu của 1 class, không sư sụng được
 abstract  class dienThoai {
    ten : string;
    
    public guiTinNhan(){
        console.log("Gui tin nhan");
    }
    public goiDien(){
        console.log(" Goi dien thoai");
    }
}

// Muốn sử dung được khai báo 1 class kế thừa mô hình mẫu của ABSTRACT
class androi extends dienThoai{

}

var samSung = new androi();
samSung.goiDien();
samSung.guiTinNhan();
