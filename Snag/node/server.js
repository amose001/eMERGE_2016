var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.send("Hello World");
});

app.post('/test', function(req,res){
});

app.post('/login', function(req,res){
    var user_name=req.body.user;
    var password=req.body.password;
    res.redirect(/*redirect to home page*/);
app.get('/',function(req,res){
    res.sendfile('testingpage.html');
});

app.get('/login', function(req,res){

});

app.listen(3000,function(){
    console.log("Started on PORT 3000");
})
