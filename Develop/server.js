// NPM Dependancies
const express = require("express");
const fs = require("fs");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 8080;

  
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


