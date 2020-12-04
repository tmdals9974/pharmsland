var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon')
const clients = ['3life', 'green', 'kirin', 'nasara', 'oralB', 'sewha', 'taeyang', 'taylor', 'wellbeing', 'wellbeing2']

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname +  '/public/images/favicon.ico'));
app.set('view engine', 'ejs');

app.listen(3000, () => { console.log("http://localhost:3000")});

app.all('/', (req, res) => {
    res.render(path.join(__dirname, "./views/main.ejs"), { clients });
});

app.all('/ceo', (req, res) => {
    res.render(path.join(__dirname, "./views/회사소개/ceo.ejs"), { clients });
});

app.all('/directions', (req, res) => {
    res.render(path.join(__dirname, "./views/회사소개/directions.ejs"), { clients });
})

app.all('/client', (req, res) => {
    res.render(path.join(__dirname, "./views/회사소개/client.ejs"), { clients })
})

app.all('/branch_seJong', (req, res) => {
    res.render(path.join(__dirname, "./views/지사안내/branch_seJong.ejs"), { clients });
})

app.all('/branch_choongBook', (req, res) => {
    res.render(path.join(__dirname, "./views/지사안내/branch_choongBook.ejs"), { clients });
})

app.all('/oem', (req, res) => {
    res.render(path.join(__dirname, "./views/사업영역/oem.ejs"), { clients });
})

app.all('/distribution', (req, res) => {
    res.render(path.join(__dirname, "./views/사업영역/distribution.ejs"), { clients });
})

app.all('/store', (req, res) => {
    res.render(path.join(__dirname, "./views/사업영역/store.ejs"), { clients });
})


app.all('/test', (req, res) => {
    res.render(path.join(__dirname, "./views/emblems.ejs"), { clients });
})
