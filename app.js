var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var app = express();
require("dotenv").config();


app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.render("homepage");
});

request(`http://www.omdbapi.com/?s=star&apikey=${process.env.APIKEY}`, function(err, res, body) {
    if (!err & res.statusCode === 200) {
        console.log(body);
    } else {
        console.log("error", err)
    }
});

app.listen(3000, function() {
    console.log("Server has started")
});