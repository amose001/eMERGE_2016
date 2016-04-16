var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var dbhandler = require("./dbhandler.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var user_name = "";

app.get('/', function(req,res){
    res.send("Hello World");
});

app.post('/test', function(req,res){
});

app.post('/login', function(req,res){
    user_name=req.body.user;
    var password=req.body.password;
    var success = dbhandler.login(user_name, password);
    if (success == 0){
        user_name = "";
        //login failed
    }
    res.redirect(/*redirect to home page*/);

app.get('/',function(req,res){
    res.sendfile('testingpage.html');
});

app.get('/login', function(req,res){
    res.send(user_name);
});

app.listen(3000,function(){
    console.log("Started on PORT 3000");
})
