function Order(id,name,price,qty,total,orderDetail) {
var _id=id;
var _name=name;
var _price=price;
var _qty=qty;
var _total=total;
// var _orderDetail = orderDetail;
this.getId=function () {
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
    this.getTotal=function () {
        return _total;
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
    this.setTotal=function (total) {
        _total=total;
    }
    // this.getOrderDetail = function () {
    //     return _orderDetail;
    // }
    // this.setOrderDetail = function (nOrderDetail) {
    //     _orderDetail = nOrderDetail;
    // }
}