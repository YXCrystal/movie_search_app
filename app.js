var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var app = express();
require("dotenv").config();


app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/homepage", function(req, res) {
    res.render("homepage");
});

app.post("/homepage", function(req, res) {
    var query = req.body.movie
    request(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.APIKEY}`, function(err, response, body) {
        if (!err & response.statusCode === 200) {
            var parsedData = JSON.parse(body);
            var movies = parsedData.Search;
            res.render("movies", {movies, query})
        } else {
            console.log("error", err)
        }
    });
});



app.listen(3000, function() {
    console.log("Server has started")
});