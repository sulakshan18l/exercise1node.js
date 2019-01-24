var http = require('http');
var sums = require('./summodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("sum of the two number is: " + sums.sumAve());
  res.end();
}).listen(8080);
