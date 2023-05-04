let customerTable = new Array();
let itemTable = new Array();
let orderTable = new Array();

//Customer
function loadCustomerTable() {
    $('#tblCustomer').children().remove();
    for (let i = 0; i < customerTable.length; i++) {
        let customer = customerTable[i];
        var row = "<tr><td>" + customer.getId() + "</td><td>" + customer.getName() + "</td><td>" +customer.getAddress() + "</td>" +
            "<td>" + customer.getContact() + "</td></tr>";
        $('#tblCustomer').append(row);
    }
   customerTableClickEvent();
}

function pushCustomer(customer) {
    customerTable.push(customer);
    loadCustomerTable();
}

function customerTableClickEvent() {
    $('#tblCustomer').children().on('click', function () {
        selectedCustomerId = $($(this).children().get(0)).text();
        let name = $($(this).children().get(1)).text();
        let address = $($(this).children().get(2)).text();
        let contact = $($(this).children().get(3)).text();
        // $('#customerUpdateForm>:nth-child(1)').val(name);
        // $('#customerUpdateForm>:nth-child(2)').val(contact);
        // $('#customerUpdateForm>:nth-child(3)').val(address);
        $('#txtCid').val(selectedCustomerId);
        $('#txtCname').val(name);
        $('#txtCaddress').val(address);
        $('#txtCtelephone').val(contact);
    });
}

//item

function loadItemTable() {
    $('#tblitem').children().remove();
    for (let i = 0; i < itemTable.length; i++) {
        let item = itemTable[i];
        var row = "<tr><td>" + item.getId() + "</td><td>" + item.getName() + "</td><td>" +item.getPrice() + "</td>" +
            "<td>" + item.getQty() + "</td></tr>";
        $('#tblitem').append(row);
    }
    itemTableClickEvent();
}

function pushItem(item) {
    itemTable.push(item);
    loadItemTable();
}

function itemTableClickEvent() {
    $('#tblitem').children().on('click', function () {
        selectedItemId = $($(this).children().get(0)).text();
        let name = $($(this).children().get(1)).text();
        let price = $($(this).children().get(2)).text();
        let qty = $($(this).children().get(3)).text();
        // $('#customerUpdateForm>:nth-child(1)').val(name);
        // $('#customerUpdateForm>:nth-child(2)').val(contact);
        // $('#customerUpdateForm>:nth-child(3)').val(address);
        $('#txtIid').val(selectedItemId);
        $('#txtIname').val(name);
        $('#txtIprice').val(price);
        $('#txtIqty').val(qty);
    });
}


//order

// function loadOrderTable() {
//     $('#tblOrder').children().remove();
//     for (let i = 0; i < orderTable.length; i++) {
//         let order = orderTable[i];
//         var row = "<tr><td>" + order.getId() + "</td><td>" + order.getName() + "</td><td>" +order.getPrice() + "</td>" +
//             "<td>" + order.getQty() + "</td><td>" + order.getTotal() + "</td></tr>";
//         $('#tblOrder').append(row);
//     }
//     // orderTableClickEvent();
// }
//
function pushOrder(order) {
    orderTable.push(order);
    // loadOrderTable();
}

// function orderTableClickEvent() {
//     $('#tblOrder').children().on('click', function () {
//         selectedOrderId = $($(this).children().get(0)).text();
//         let name = $($(this).children().get(1)).text();
//         let price = $($(this).children().get(2)).text();
//         let qty = $($(this).children().get(3)).text();
//         let total = $($(this).children().get(4)).text();
//         // $('#customerUpdateForm>:nth-child(1)').val(name);
//         // $('#customerUpdateForm>:nth-child(2)').val(contact);
//         // $('#customerUpdateForm>:nth-child(3)').val(address);
//         $('#txtIid').val(selectedItemId);
//         $('#txtIname').val(name);
//         $('#txtIprice').val(price);
//         $('#txtIqty').val(qty);
//     });
// }



