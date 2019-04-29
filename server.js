/* port */
process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
};
// var PORT = process.env.PORT || 3000;

/* setting */
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var app = express();

/* static content in "public" directory */
app.use(express.static("public"));

/* parse request body as JSON */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* handlebars */
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scrapeDB";
//scrapeData
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connect(MONGODB_URI);

var controller = require("./controller/Controller.js");
app.use(controller);

/* listener */
app.listen(3000, function() {
  console.log("Port " + 3000);
});
