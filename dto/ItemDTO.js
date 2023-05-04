function Item(id,name,price,qty) {
var _id=id;
var _name=name;
var _price=price;
var _qty=qty;

this.getId=function() {
return _id;
}



   this.getName=function () {
   return _name;
   }


   this.getPrice=function () {
    return _price;
 }



    this.getQty=function () {
    return _qty;
    }

    this.setId=function (id) {
        _id=id;
    }
    this.setName=function (name) {
        _name=name;
    }

    this.setPrice=function (price) {
        _price=price;
    }
   this.setQty=function (qty) {
   _qty=qty;
   }

}