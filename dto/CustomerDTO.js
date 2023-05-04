function Customer(id,name,address,contact) {
    var _id=id;
    var _name=name;
    var _address=address;
    var _contact=contact;


    this.getId=function(){
        return _id;
    }
    this.getName=function(){
        return _name;
    }
    this.getContact=function(){
        return _contact;
    }
    this.getAddress=function () {
        return _address;
    }

    this.setId=function (id) {
        _id=id;
    }
    this.setName=function(name){
        _name=name;
    }
    this.setContact=function(contact){
        _contact=contact;
    }
    this.setAddress=function (address) {
        _address=address;
    }
}