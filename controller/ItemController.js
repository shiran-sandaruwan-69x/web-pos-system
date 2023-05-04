$('#btnItemSave').click(function () {

     SaveItem();


});

function SaveItem() {
    $('#tblitem>tr').off('click');


    let id=$('#txtItemId').val();
    let name=$('#txtItemName').val();
    let price=$('#txtItemPrice').val();
    let qty=$('#txtItemQty').val();

    // var val="<tr><td>"+id+"</td><td>"+name+"</td><td>"+address+"</td><td>"+telephone+"</td></tr>";
    // $('#tblCustomer').append(val);
    var c1=new Item(id,name,price,qty);

    pushItem(c1);
    clearITextFeild();


}


function clearITextFeild() {
    $('#txtItemId').val("");
    $('#txtItemName').val("");
    $('#txtItemPrice').val("");
    $('#txtItemQty').val("");

    $('#txtItemId').focus();

}

let selectedItemId;

//delete item
$('#btnDeleteItem').on('click', function () {

    for (let i = 0; i < itemTable.length; i++) {
        var item = itemTable[i];
        if (selectedItemId == item.getId()) {
            itemTable.splice(i, 1);
        }
    }




    loadItemTable();
    clearItext();
});

function clearItext() {
    $('#txtIid').val('');
    $('#txtIname').val('');
    $('#txtIprice').val('');
    $('#txtIqty').val('')
    $('#txtIid').focus();
}

//update item

$('#btnUpdateItem').on('click', function () {
    UpdateItemNow();


});
function UpdateItemNow(){
    let id = $('#txtIid').val();
    let name = $('#txtIname').val();
    let price = $('#txtIprice').val();
    let qty = $('#txtIqty').val();

    for (let i = 0; i < itemTable.length; i++) {
        var item1 = itemTable[i];
        if (selectedItemId == item1.getId()) {
            item1.setId(id)
            item1.setName(name);
            item1.setPrice(price);
            item1.setQty(qty);
        }
    }
    loadItemTable();
}


//search item


$('#btnSearchItem').on('click',function () {
    searchItemResultClickEvent();
});


function searchItemResultClickEvent() {
    let itemId =$('#txtIid').val();
    for (var item2 of itemTable) {
        if (item2.getId() == itemId) {
            selectedItemId = item2.getId();
            $('#txtIname').val(item2.getName());
            $('#txtIprice').val(item2.getPrice());
            $('#txtIqty').val(item2.getQty());
            break;
        }
    }

}
$('#btnClearItem').on('click',function () {
    clearItext();
});

//validation
var itemReg=/^(I00)[0-9]{1,3}$/;
$('#txtItemId').on('keyup',function (event) {

    if (event.key=="Enter"){
        $('#txtItemName').focus();
    }

    //valudation part eka

    let inputvalue=$('#txtItemId').val();

    if (itemReg.test(inputvalue)){
        $('#txtItemId').css('border','2px solid green');
    }else {
        $('#txtItemId').css('border','2px solid red');
    }


});
var itemRegName=/^[A-z]{2,}$/;
$('#txtItemName').on('keyup',function (event) {

    if (event.key=="Enter"){
        $('#txtItemPrice').focus();
    }

    let inputvalue=$('#txtItemName').val();
    if (itemRegName.test(inputvalue)){
        $('#txtItemName').css('border','2px solid green');
    }else {
        $('#txtItemName').css('border','2px solid red');
    }

});

var itemRegPrice = /^[0-9]{1,}$/;
$('#txtItemPrice').on('keyup',function (event) {

    if (event.key=="Enter"){
        $('#txtItemQty').focus();
    }


    let inputvalue=$('#txtItemPrice').val();
    if (itemRegPrice.test(inputvalue)){
        $('#txtItemPrice').css('border','2px solid green');
    }else {
        $('#txtItemPrice').css('border','2px solid red');
    }

});



var itemRegQty = /^[0-9]{1,}$/;
$('#txtItemQty').on('keyup',function (event) {

    if (event.key=="Enter"){

        SaveItem();
    }

    let inputvalue=$('#txtItemQty').val();
    if (itemRegQty.test(inputvalue)){
        $('#txtItemQty').css('border','2px solid green');
    }else {
        $('#txtItemQty').css('border','2px solid red');
    }



});

//next validation

$('#txtIid').on('keyup',function (event) {

    if (event.key=="Enter"){
        $('#txtIname').focus();
    }

    //valudation part eka

    let inputvalue=$('#txtIid').val();

    if (itemReg.test(inputvalue)){
        $('#txtIid').css('border','2px solid green');
    }else {
        $('#txtIid').css('border','2px solid red');
    }


});

$('#txtIname').on('keyup',function (event) {

    if (event.key=="Enter"){
        $('#txtIprice').focus();
    }

    let inputvalue=$('#txtIname').val();
    if (itemRegName.test(inputvalue)){
        $('#txtIname').css('border','2px solid green');
    }else {
        $('#txtIname').css('border','2px solid red');
    }

});


$('#txtIprice').on('keyup',function (event) {

    if (event.key=="Enter"){
        $('#txtIqty').focus();
    }


    let inputvalue=$('#txtIprice').val();
    if (itemRegPrice.test(inputvalue)){
        $('#txtIprice').css('border','2px solid green');
    }else {
        $('#txtIprice').css('border','2px solid red');
    }

});




$('#txtIqty').on('keyup',function (event) {

    if (event.key=="Enter"){

      UpdateItemNow();
    }

    let inputvalue=$('#txtIqty').val();
    if (itemRegQty.test(inputvalue)){
        $('#txtIqty').css('border','2px solid green');
    }else {
        $('#txtIqty').css('border','2px solid red');
    }



});
