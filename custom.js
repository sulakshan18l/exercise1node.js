var http = require('http');
var sum = require('./summodule')
//create a server object:

http.createServer(function (req, res) {

 //write a response to the
client
res.write("sum average is:"+sum.sumAverage(123,321));
res.end(); //end the response

}).listen(8080); //the server object listens on port 8000
