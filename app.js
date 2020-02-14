var express = require('express');
var path = require("path");
var app = express();


const port = 8080;
const defaultOption = { root : __dirname};
app.get('/', (req, res)=>{
    res.sendFile("/static/index.html", defaultOption);
});
app.use("/static", express.static(path.join(__dirname, "static")));

var server = app.listen(port, function(){
    console.log('Server is running at port' + port);
});