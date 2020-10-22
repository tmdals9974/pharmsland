var express = require('express');
var app = express();
var path = require('path');

app.listen(3000, () => {
    console.log("start express server on port 3000!!");
})

app.use(express.static(__dirname + '/assets'));  //app.use('/static', express.static(__dirname + '/public')); //가상접두부를 통해 마운트 가능 (/static/main.js)

app.all('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./views/main.html"));
})