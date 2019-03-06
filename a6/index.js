var express = require('express');
var app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/autograder', function(req, res){
    res.json({msg:"success"});
});

app.listen(8080);