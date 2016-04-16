var MongoClient = require('mongodb').MongoClient;

exports.db = MongoClient.connect("mongodb://52.201.9.182:27017/emerge");

exports.sales = db.collection('sales');

var testdata = {'name':'Fried Twinky', 'long':'-80.1909090', 'lat':'25.7776200', 'endTime':'2016-04-17 10:30:00'};

exports.newUser = function(name, password){
    db.createUser({ user:"\""+name+"\"",
        pwd: "\""+password+"\"",
        roles: []
    });
}

exports.login = function (name, password){
    return db.auth(name, password);
}

exports.insertData = function(data){
    sales.insert(data);
}

exports.findData = function(){
    sales.find().toArray(function(err, items) {
        process.stdout.write(items.toString());
    });
}
