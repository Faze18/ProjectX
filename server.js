var express = require("express");
var bodyParser = require("body-parser");
const fetch = require("node-fetch")
//var db = require("./models");

var PORT = process.env.PORT || 8081;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Import routes and give the server access to them.
app.get('/', function (req, res) {
  // fetch("http://api.eventful.com/json/categories/list?app_key=7NcRZmf2tJjpdF89")
  fetch(`http://api.eventful.com/json/categories/list?app_key=${process.env.api_key}`)

    .then(res => res.text())
    .then(categories => {
      console.log(categories)
      // let categories = [{ id: "music", name: "more music" }, { id: "comedy", name: "john mulaney" }];
      // console.log("hey")
      res.render("survey", JSON.parse(categories))
    }
    )

})


// app.use(routes);

// Start our server so that it can begin listening to client requests.
// db.sequelize.sync().then(function () {
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
// });