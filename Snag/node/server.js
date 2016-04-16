var express = require("express");
var app = express();

//app.route('/test')

//  .get(function(req,res) {
      //send data to front end
//  })

//  .post(function(req, res) {
//      res.redirect('http://localhost:8100/')
//  });

//app.listen(9000);
//console.log('Serving on port 9000');
app.get('/',function(req,res){
    res.send("Hello World");
});
app.post('/test',function(req,res){
});
app.listen(3000,function(){
    console.log("Started on PORT 3000");
})
