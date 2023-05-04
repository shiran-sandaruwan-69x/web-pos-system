function OrderDetails(oid, code, qty,price) {
    let _orderId = oid;
    let _itemCode = code;
    let _quantity = qty;
    let _unitPrice = price;

    this.getOrderId = function () {
        return _orderId;
    };
    this.setOrderId = function (orderId) {
        _orderId = orderId;
    };
    this.getItemCode = function () {
        return _itemCode;
    };
    this.setItemCode = function (code) {
        _itemCode = code;
    };
    this.getQuantity = function () {
        return _quantity;
    };
    this.setQuantity = function (quantity) {
        _quantity = quantity;
    };
    this.getUnitPrice = function () {
        return _unitPrice;
    };
    this.setUnitPrice = function (unitPrice) {
        _unitPrice = unitPrice;
    }
}