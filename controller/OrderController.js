//search customer
$('#btnOCusSearch').on('click',function () {
    searchOCusResultClickEvent();

});


function searchOCusResultClickEvent() {
    let customerId =$('#txtOCusId').val();
    for (var customer of customerTable) {
        if (customer.getId() == customerId) {
            // selectedCustomerId = customer.getId();
            $('#txtOCusName').val(customer.getName());
            $('#txtOCusTelephone').val(customer.getContact());
            $('#txtOCusAddress').val(customer.getAddress());
            break;
        }
    }

}

//item search

$('#btnOItemSearch').on('click',function () {
searchOItemResultClickEvent();


});

function searchOItemResultClickEvent() {
let itemname=$('#txtOItemName').val();
for (var item of itemTable){
    if (item.getName()==itemname){
        $('#lblOItemId').val(item.getId());
        $('#txtOItemPrice').val(item.getPrice());
        $('#txtOItemQty').val(item.getQty());
        break;
    }
}
}

//order

// function addToCad() {
// var itemPrice=$('#txtOItemPrice').val();
// var oQty=$('#txtOOrderQty').val();
// var tot=itemPrice*oQty;
// $('#txtOCash').val(tot);
// }
// $('#btnOAddToCad').on('click',function () {
// addToCad();
//     updateItemTable();
//
// });
//
// $('#btnOTotal').on('click',function () {
//     calculateAmount();
//     calculateNewAmount();
// });

// function calculateAmount() {
// var cash=$('#txtOCash').val();
// var discount=$('#txtODiscount').val();
// var balance=cash-(cash*discount/100);
// $('#txtOBalance').val(balance);
//     $('#lblOTotalPrice').text(balance);
// }


//update item table

// function updateItemTable() {
//     let id = $('#lblOItemId').val();
//     let name = $('#txtOItemName').val();
//     let price = $('#txtOItemPrice').val();
//     let qty = $('#txtOItemQty').val();
//     let nqty=$('#txtOOrderQty').val();
//     let nowQty=qty-nqty;
//     for (let i = 0; i < itemTable.length; i++) {
//         var item1 = itemTable[i];
//         if (selectedOrderId == item1.getId()) {
//             item1.setId(id)
//             item1.setName(name);
//             item1.setPrice(price);
//             item1.setQty(nowQty);
//         }
//     }
//     loadItemTable();
//
// }
 //add to order table
// let selectedOrderId;
// $('#btnOPlaceOrder').on('click',function () {
//
//     PlaceOrder();
//     loadItemTable();
//
//
// });
//
// function PlaceOrder() {
//     $('#tblOrder>tr').off('click');
//
//
//     let id=$('#txtOid').val();
//     let name=$('#txtOItemName').val();
//     let price=$('#txtOItemPrice').val();
//     let qty=$('#txtOOrderQty').val();
//     let total=$('#txtOBalance').val();
//
//     var c3=new Order(id,name,price,qty,total);
//
//     pushOrder(c3);
//
//
// }

//new


$('#btnOAddToCad').click(function () {
    let itemCode = $('#lblOItemId').val();
    let description = $('#txtOItemName').val();
    let orderQty = $('#txtOOrderQty').val();
    let unitPrice = $('#txtOItemPrice').val();
    let total = $('#txtOItemPrice').val() * $('#txtOOrderQty').val();

    let count = 0;

    let flag = true;

    $('#tblCart>tr').each(function () {
        if ($($('#tblCart>tr').get(count).children[0]).text() === itemCode) {
            flag = false;
            orderQty = Number.parseInt($($('#tblCart>tr').get(count).children[3]).text()) + Number.parseInt(orderQty);
            $($('#tblCart>tr').get(count).children[3]).text(orderQty);
            total = Number.parseInt($($('#tblCart>tr').get(count).children[4]).text()) + Number.parseInt(total);
            $($('#tblCart>tr').get(count).children[4]).text(total + ".00");
        }
        count++;
    });
    if (flag) {
        var row = "<tr><td>" + itemCode + "</td><td>" + description + "</td><td>" +unitPrice + "</td>" +
            "<td>" + orderQty + "</td><td>" + total + "</td></tr>";

        $('#tblCart').append(row);
    }

    let newQty;
    newQty = Number.parseInt($('#txtQtyOnHand').val()) - Number.parseInt($('#txtOOrderQty').val());
    $('#txtQtyOnHand').val(newQty);
    let allItems = itemTable;
    for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].getId() === $('#txtIid').val()) {
            allItems[i].setQty(newQty);
        }
    }

    $('#tblCart>tr').off('dblclick');
    $('#tblCart>tr').on('dblclick', function () {
        let newQty;
        let allItems = itemTable;
        for (let i = 0; i < allItems.length; i++) {
            if (allItems[i].getId() === $($(this).children().get(0)).text()) {
                newQty = Number.parseInt($($(this).children().get(3)).text()) + allItems[i].getQty();
                allItems[i].setQty(newQty);
            }
        }
        if ($($(this).children().get(0)).text() === $('#txtItemCode').val()) $('#txtQtyOnHand').val(newQty);
        $(this).remove();
        calculateTotal();
        calculateSubTotal();
    });
    calculateTotal();

});


function calculateTotal() {
    let tot = 0;
    let count = 0;

    $('#tblCart>tr').each(function () {
        tot += Number.parseInt($($('#tblCart>tr').get(count).children[4]).text());
        count++;
    });
    $('#lblTotal').text(tot + ".00");
    $('#lblSubTotal').text(tot + ".00");
    $('#txtDiscount').val(0);
    $('#txtPayment').val(tot);


}

//sub
function calculateSubTotal() {
    let subTot = 0;
    let discount = 0;
    if ($('#txtDiscount').val() === "") {
        discount = 0;
    } else {
        discount = Number.parseInt($('#txtDiscount').val());
    }
    subTot = Number.parseInt($('#lblTotal').text()) - discount;

    if (subTot < 0) {
        $('#lblSubTotal').text($('#lblTotal').text());
        $('#txtPayment').val(Number.parseInt($('#lblTotal').text()));
        $('#txtPayment').attr('min', Number.parseInt($('#lblTotal').text()));
    } else {
        $('#lblSubTotal').text(subTot + ".00");
        $('#txtPayment').val(subTot);
        $('#txtPayment').attr('min', subTot);
        // calculateBalance();
    }
}





$('#txtDiscount').on('keyup', function () {
    calculateSubTotal();
});




//place order



function PlaceOrder() {
    $('#tblCart>tr').off('click');


    let id=$('#txtOid').val();
    let name=$('#txtOItemName').val();
    let price=$('#lblTotal').text();
    let qty=$('#txtOOrderQty').val();
    let total=$('#lblSubTotal').val();

    var c3=new Order(id,name,price,qty,total);

    pushOrder(c3);
    alert("place ordered.....!");
    clear();

}

$('#btnPlaceOrder').on('click',function () {
PlaceOrder();
});
// $('#btnPlaceOrder').on('click',function () {
//     $('#tblCart>tr').off('click');
//     let orderDetails = [];
//     let id=$('#txtOid').val();
//     let name=$('#txtOItemName').val();
//     let price=$('#lblTotal').text();
//     let qty=$('#txtOOrderQty').val();
//     let total=$('#lblSubTotal').val();
//
//     if (!$('#tblCart').is(':empty')) {
//         $('#tblCart>tr').each(function () {
//             let id1=    $($(this).children().get(0)).text();
//             let id2=    $($(this).children().get(1)).text();
//             let id3=  $($(this).children().get(0)).text();
//             orderDetails.push(new OrderDetails(
//                 id,id1,id2,id3
//             ));
//         });
//
//
//         var c3 = new Order(id, name, price, qty, total, orderDetails);
//
//         pushOrder(c3);
// alert("added!!");
//
//     }else {
//         alert("Cart Is Empty..!");
//
//     }
//
// });

function clear() {
$('#txtOCusId').val('');
    $('#txtOid').val('');
    $('#txtOCusName').val('');
    $('#txtOCusName').val('');
    $('#txtOCusTelephone').val('');
    $('#txtOCusAddress').val('');
    $('#txtOItemName').val('');
    $('#txtOItemPrice').val('');
    $('#txtOItemQty').val('');
    $('#txtOOrderQty').val('');
    $('#lblOItemId').val('');

    $('#lblSubTotal').text(0+".00");
    $('#lblTotal').text( 0+".00");
    $('#txtDiscount').val(0);
    $('#txtPayment').val(0);
}