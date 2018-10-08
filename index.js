var express = require('express'),
app = express();
    fileSystem = require('fs'),
    path = require('path');

app.get('/', function(req, res){
  res.send('Ola Mundo');
});
app.listen(3000);