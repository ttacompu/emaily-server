const express = require("express");
const mongoose = require("mongoose");
const keys = require('./config/keys');

require("./models/User")
require("./services/passport");
const routes = require("./routes/authRoute");

mongoose.connect(keys.mongoURI, {useNewUrlParser : true, useUnifiedTopology: true});
const app = express();
routes(app);


app.listen(process.env.PORT || 5000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
