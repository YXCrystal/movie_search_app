var express = require("express");
var request = require("request");
var app = express();

app.get("/", function(req, res) {
    res.send("Hello");
});

app.listen(3000, function() {
    console.log("Server has started")
});