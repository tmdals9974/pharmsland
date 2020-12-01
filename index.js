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
    res.render(path.join(__dirname, "./views/회사소개/ceo.ejs"));
});

app.all('/directions', (req, res) => {
    res.render(path.join(__dirname, "./views/회사소개/directions.ejs"));
})

app.all('/branch_seJong', (req, res) => {
    res.render(path.join(__dirname, "./views/지사안내/branch_seJong.ejs"));
})

app.all('/branch_choongBook', (req, res) => {
    res.render(path.join(__dirname, "./views/지사안내/branch_choongBook.ejs"));
})

app.all('/oem', (req, res) => {
    res.render(path.join(__dirname, "./views/사업영역/oem.ejs"));
})

app.all('/distribution', (req, res) => {
    res.render(path.join(__dirname, "./views/사업영역/distribution.ejs"));
})

app.all('/store', (req, res) => {
    res.render(path.join(__dirname, "./views/사업영역/store.ejs"));
})