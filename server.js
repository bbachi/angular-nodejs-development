const express = require('express'),
      bodyParser = require("body-parser")
      logger = require('./api/logger'),
      app = express(),
      port = 3070;

app.use(bodyParser.json());

app.use("/api", require("./api/routes"));

// request to handle undefined or all other routes
app.get("*", function(req, res) {
    logger.info("users route");
    res.send("App works!!!!!");
})

app.listen(port, function(err) {
    console.log('server running on the port '+ port);
})