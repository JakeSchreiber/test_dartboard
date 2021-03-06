var express = require('express');
var app = express();
var path = require('path');

//var index = require('./index');

app.set("port", process.env.PORT || 5000);

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({expanded: true})); //mounting middleware onto middleware stack app.use

//app.use('/', index);

app.get("/*", function(req, res) {
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});


app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});