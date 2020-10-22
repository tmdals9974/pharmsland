var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon')

app.use(express.static(__dirname + '/assets'));
app.use(favicon(__dirname +  '/assets/images/favicon.ico'));

app.listen(3000, () => { console.log("http://localhost:3000")});

app.all('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/main.html"));
})