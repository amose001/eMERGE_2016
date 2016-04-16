var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://52.201.9.182:27017/emerge", function(err, db) {
    if(!err) {
        console.log("We are connected");
    }
    var sales = db.collection('sales');

    var testdata = {'name':'Fried Twinky', 'long':'-80.1909090', 'lat':'25.7776200', 'endTime':'2016-04-17 10:30:00'};

    sales.insert(testdata);
    sales.find().toArray(function(err, items) {
        process.stdout.write(items.toString());
    });



});
