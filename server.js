var express = require("express");
const path = require("path");
var app = express();
var PORT = 2189;

//DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES

// require("./routes/api")(app);
 require("./routes/html")(app);

//LISTENER
app.listen(PORT, function() {
  console.log("Server is running and listening on PORT:" + PORT)
});