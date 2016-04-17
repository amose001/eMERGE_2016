var MongoClient = require('mongodb').MongoClient;

exports.newUser = function(name, password){
    var db = MongoClient.connect("mongodb://52.201.9.182:27017/emerge", function(err, db){
        var sales = db.collection('sales');

          db.createUser({ user:"\""+name+"\"",
            pwd: "\""+password+"\"",
            roles: []
        });
    });
}

exports.login = function (name, password){
    var x = 0;
    var db = MongoClient.connect("mongodb://52.201.9.182:27017/emerge", function(err, db){
        var sales = db.collection('sales');
        x = db.auth(name, password);
    });
    return x;
}

exports.insertData = function(data){
    var db = MongoClient.connect("mongodb://52.201.9.182:27017/emerge", function(err, db){
        var sales = db.collection('sales');
        sales.insert(data);
    });
}

exports.findData = function(){
    var db = MongoClient.connect("mongodb://52.201.9.182:27017/emerge", function(err, db){
    var sales = db.collection('sales');
        sales.find().toArray(function(err, items) {
            process.stdout.write(items.toString());
        });
    });
}
