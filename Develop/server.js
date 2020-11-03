// NPM Dependancies
const express = require("express");
const fs = require("fs");
const path = require("path");



const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());  

// allow the server to serve up static files within the public folder
app.use(express.static('public'));

require("./routes/apiRoutes")(app);               // I swapped these lines around as the /api/notes get method was for some reason  returning index.html
require("./routes/htmlRoutes")(app);


// Listener
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});


