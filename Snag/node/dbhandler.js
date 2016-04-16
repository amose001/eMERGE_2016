var MongoClient = require('mongodb').MongoClient;

var db = MongoClient.connect("mongodb://52.201.9.182:27017/emerge");

var sales = db.collection('sales');

var testdata = {'name':'Fried Twinky', 'long':'-80.1909090', 'lat':'25.7776200', 'endTime':'2016-04-17 10:30:00'};

sales.insert(testdata);

function newUser(name, password){
    db.createUser({ user:"\""+name+"\"",
        pwd: "\""+password+"\"",
        roles: []
    });
}

function login(name, password){
    return db.auth(name, password);
}

function insertData(data){
    sales.insert(data);
}

function findData(){
    sales.find().toArray(function(err, items) {
        process.stdout.write(items.toString());
    });
}
