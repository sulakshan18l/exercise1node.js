var fs = require('fs');

fs.unlink('exercise1.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
}); 
