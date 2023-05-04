$('#btnCustomerSave').click(function () {

    SaveCustomer();



});

function SaveCustomer() {
    $('#tblCustomer>tr').off('click');


    let id=$('#txtCusId').val();
    let name=$('#txtCusName').val();
    let address=$('#txtCusAddress').val();
    let telephone=$('#txtCusTelephone').val();

    // var val="<tr><td>"+id+"</td><td>"+name+"</td><td>"+address+"</td><td>"+telephone+"</td></tr>";
    // $('#tblCustomer').append(val);
    var c1=new Customer(id,name,address,telephone);

    pushCustomer(c1);
    clearTextFeild();

    // $('#tblCustomer>tr').click(function(){
    //     // let id=$($(this).children().get(0)).text();
    //     // let name=$($(this).children().get(1)).text();
    //     // let address=$($(this).children().get(2)).text();
    //     // let telephone=$($(this).children().get(3)).text();
    //     // console.log(id,name,address,telephone)
    //
    //     let id=$(this).children('td:eq(0)').text();
    //     let name=$(this).children('td:eq(1)').text();
    //     let address=$(this).children('td:eq(2)').text();
    //     let telephone=$(this).children('td:eq(3)').text();
    //     // console.log(id,name,address,telephone);
    //
    //
    //     //set text Feild
    //     $('#txtCid').val(id);
    //     $('#txtCname').val(name);
    //     $('#txtCaddress').val(address);
    //     $('#txtCtelephone').val(telephone);
    //
    // });
}


function clearTextFeild() {
    $('#txtCusId').val("");
    $('#txtCusName').val("");
    $('#txtCusAddress').val("");
    $('#txtCusTelephone').val("");

    $('#txtCusId').focus();

}

var cusReg=/^(C00)[0-9]{1,3}$/;
$('#txtCusId').on('keyup',function (event) {

    if (event.key=="Enter"){
        $('#txtCusName').focus();
    }

    //valudation part eka

    let inputvalue=$('#txtCusId').val();

    if (cusReg.test(inputvalue)){
        $('#txtCusId').css('border','2px solid green');
    }else {
        $('#txtCusId').css('border','2px solid red');
    }


});
var cusName=/^[A-z]{3,}$/;
$('#txtCusName').on('keyup',function (event) {

    if (event.key=="Enter"){
        $('#txtCusAddress').focus();
    }

    let inputvalue=$('#txtCusName').val();
    if (cusName.test(inputvalue)){
        $('#txtCusName').css('border','2px solid green');
    }else {
        $('#txtCusName').css('border','2px solid red');
    }

});

var cusAddress = /^[A-z0-9]{5,}$/;
$('#txtCusAddress').on('keyup',function (event) {

    if (event.key=="Enter"){
        $('#txtCusTelephone').focus();
    }


    let inputvalue=$('#txtCusAddress').val();
    if (cusAddress.test(inputvalue)){
        $('#txtCusAddress').css('border','2px solid green');
    }else {
        $('#txtCusAddress').css('border','2px solid red');
    }

});



var cusTelephone = /^[0-9]{10}$/;
$('#txtCusTelephone').on('keyup',function (event) {

    if (event.key=="Enter"){
        SaveCustomer();

    }

    let inputvalue=$('#txtCusTelephone').val();
    if (cusTelephone.test(inputvalue)){
        $('#txtCusTelephone').css('border','2px solid green');
    }else {
        $('#txtCusTelephone').css('border','2px solid red');
    }



});
// }

//tab ekan wena focus wena eka nawath wanna ona
$('#txtCusId,#txtCusName,#txtCusAddress,#txtCusTelephone').on('keydown',function (event) {
    if (event.key=="Tab"){
        event.preventDefault();
    }
});



//delete customer

var cCount = 2;
let selectedCustomerId;


$('#btnDeleteCustomer').on('click', function () {

    for (let i = 0; i < customerTable.length; i++) {
        var customer = customerTable[i];
        if (selectedCustomerId == customer.getId()) {
            customerTable.splice(i, 1);
        }
    }




    loadCustomerTable();
    clearCtext();
});

function clearCtext() {
    $('#txtCid').val('');
    $('#txtCname').val('');
    $('#txtCaddress').val('');
    $('#txtCtelephone').val('')
    $('#txtCid').focus();
}

//update customer

$('#btnUpdateCustomer').on('click', function () {

    UpdateCustomer();


});

function UpdateCustomer(){
    let id = $('#txtCid').val();
    let name = $('#txtCname').val();
    let contact = $('#txtCtelephone').val();
    let address = $('#txtCaddress').val();

    for (let i = 0; i < customerTable.length; i++) {
        var customer = customerTable[i];
        if (selectedCustomerId == customer.getId()) {
            customer.setId(id)
            customer.setName(name);
            customer.setAddress(address);
            customer.setContact(contact);
        }
    }
    loadCustomerTable();
}
//search customer

$('#btnSearchCustomer').on('click',function () {
     searchCusResultClickEvent();
});


function searchCusResultClickEvent() {
        let customerId =$('#txtCid').val();
        for (var customer of customerTable) {
            if (customer.getId() == customerId) {
                selectedCustomerId = customer.getId();
                $('#txtCname').val(customer.getName());
                $('#txtCtelephone').val(customer.getContact());
                $('#txtCaddress').val(customer.getAddress());
                break;
            }
        }

}
$('#btnClearCustomer').on('click',function () {
    clearCtext();
});

//validation C

$('#txtCid').on('keyup',function (event) {

    if (event.key=="Enter"){
        $('#txtCname').focus();
    }

    //valudation part eka

    let inputvalue=$('#txtCid').val();

    if (cusReg.test(inputvalue)){
        $('#txtCid').css('border','2px solid green');
    }else {
        $('#txtCid').css('border','2px solid red');
    }


});

$('#txtCname').on('keyup',function (event) {

    if (event.key=="Enter"){
        $('#txtCaddress').focus();
    }

    let inputvalue=$('#txtCname').val();
    if (cusName.test(inputvalue)){
        $('#txtCname').css('border','2px solid green');
    }else {
        $('#txtCname').css('border','2px solid red');
    }

});


$('#txtCaddress').on('keyup',function (event) {

    if (event.key=="Enter"){
        $('#txtCtelephone').focus();
    }


    let inputvalue=$('#txtCaddress').val();
    if (cusAddress.test(inputvalue)){
        $('#txtCaddress').css('border','2px solid green');
    }else {
        $('#txtCaddress').css('border','2px solid red');
    }

});




$('#txtCtelephone').on('keyup',function (event) {

    if (event.key=="Enter"){

        UpdateCustomer();
    }

    let inputvalue=$('#txtCtelephone').val();
    if (cusTelephone.test(inputvalue)){
        $('#txtCtelephone').css('border','2px solid green');
    }else {
        $('#txtCtelephone').css('border','2px solid red');
    }



});
