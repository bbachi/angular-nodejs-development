var express = require("express"),
    apiRouter = express();


apiRouter.use("/users", require('./users'));

module.exports = apiRouter;