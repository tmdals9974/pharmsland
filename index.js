var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon')

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname +  '/public/images/favicon.ico'));
app.set('view engine', 'ejs');

app.listen(3000, () => { console.log("http://localhost:3000")});

app.all('/', (req, res) => {
    res.render(path.join(__dirname, "./views/main.ejs"));
});

app.all('/ceo', (req, res) => {
    res.render(path.join(__dirname, "./views/ceo.ejs"));
});