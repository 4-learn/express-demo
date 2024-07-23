var express = require('express'); //把express call來使用  
 var app = express();   
 app.get('/', function(req, res) {  
  res.send('<H1>Hello</H1> Express');  
 });  
 //app.get 意思是 如果收到 '/'   
 var server = app.listen(3000, function() {  
  console.log('Listening on port 3000');  
 }); 
