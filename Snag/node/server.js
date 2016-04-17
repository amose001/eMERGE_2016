var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var dbhandler = require("./dbhandler.js");
var path = require('path')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '')));

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
    var success = dbhandler.login(user_name,password);
    if(success==0) {
      user_name="";
    }
    res.redirect(/*redirect to home page*/);

});

app.route('/sales')
  .post(function(req,res){
    var codeword=req.body.codeword;
    var headline=req.body.headline;
    var info=req.body.info;
    var range=req.body.range;
    var datetime=req.body.datetime;
    var stock=req.body.stock;
});

// app.post('/'+user_name+'/sales', function(req,res){
//     var passCode=req.body.passCode;
//     var stock=req.body.stock;
//     var range=req.body.range;
//     var endTime=req.body.endTime;
// });

app.post('/test', function(req,res){
});

// app.post('/login', function(req,res){
//     user_name=req.body.user;
//     var password=req.body.password;
//     var success = dbhandler.login(user_name, password);
//     if (success == 0){
//         user_name = "";
//         //login failed
//     }
//     res.redirect(/*redirect to home page*/);
// });
//
// app.get('/login', function(req,res){
//     res.send(user_name);
// });

app.route('/location')
    .post(function (req, res) {

});

app.listen(3000,function(){
    console.log("Started on PORT 3000");
});
