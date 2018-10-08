var express = require('express'),
app = express();
    fileSystem = require('fs'),
    path = require('path');

app.get('/', function(req, res){
  var filePath = path.join(__dirname, 'myfile.mp3');
    var stat = fileSystem.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
    });

    var readStream = fileSystem.createReadStream(filePath);
    // We replaced all the event handlers with a simple call to readStream.pipe()
    readStream.pipe(res);
});
app.listen(process.env.PORT || 3000);