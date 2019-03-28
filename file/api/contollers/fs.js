var fs = require('fs');

module.exports.write = (request, response) => {
    fs.appendFile('my.txt', 'nitin', function (err) {
        if (err) throw err;
        console.log('Successfully added !');

    });
    response.end('Successfully added !');
}


module.exports.delete = (request, response) => {
      fs.unlink('my.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
      });
      response.end('Successfully deleted !');
      }

module.exports.read = (req, res) => {
        fs.readFile('my.txt', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
          console.log("Successfully Read!");
        });
      }