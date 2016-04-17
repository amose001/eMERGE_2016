var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var dbhandler = require("./dbhandler.js");
var path = require('path')
var geofence = require("./geofence.js");
var visareq = require("./visa.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));
var results = "";
var user_name = "";

app.route('/')
  .get(function(req,res){
    res.sendFile('index.html', { root: "../"});
});

app.route('/login')
  .get(function(req,res) {
    res.send(user_name);
  })
  .post(function(req,res) {
    user_name=req.body.user;
    var password=req.body.password;
    console.log(user_name);
    console.log(password);
    var success = dbhandler.login(user_name,password);
    if(success==0) {
      user_name="";
    }
    res.redirect('/');

});

app.route('/sales')
  .post(function(req,res){
    var codeword=req.body.codeword;
    var headline=req.body.headline;
    var info=req.body.info;
    var range=req.body.range;
    var datetime=req.body.datetime;
    var stock=req.body.stock;
    var lat = req.body.lat;
    var long = req.body.long;
    console.log(codeword);
    console.log(headline);
    console.log(info);
    console.log(range);
    console.log(datetime);
    console.log(stock);
    console.log(lat);
    console.log(long);
    var data = {'name':headline,
                'codeword':codeword,
                'info':info,
                'range':range,
                'stock':stock,
                'long':long,
                'lat':lat,
                'endTime':datetime
              };
    dbhandler.insertData(data);
    res.redirect('/post2.html');
});

app.get('/time', function(req,res){
    res.send(results);
});

app.route('/location')
    .post(function (req, res) {
        var Lo = req.body.long2;
        var La = req.body.lat2;
        var code = req.body.bob;
        results = geofence.getCoords(code, Lo, La);
        /*
        Async too dank 4 me
        */
        console.log("swag "+results);
        if (results != null) {
            res.redirect('/snag2.html');
        } else {
            res.redirect('/Error.html')
        }
    }
);
app.route('/createAccount')
    .post(function (req, res) {
        res.redirect('/createAccount.html')
    });

app.route('/snag2to3')
    .post(function (req, res) {
        res.redirect('/snag3.html')
    });

app.route('/snag2_3')
    .post(function (req, res) {
        res.redirect('/snag3.html')
    });

app.route('/snag3_4')
    .post(function (req, res) {
        visareq.visaBuy();
        res.redirect('/snag4.html')
    });

app.listen(3000,function(){
    console.log("Started on PORT 3000");
});
