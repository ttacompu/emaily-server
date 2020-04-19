const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const passport = require('passport');

require("./models/User")
require("./services/passport");
const routes = require("./routes/authRoute");

mongoose.connect(keys.mongoURI, {useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true})
        .then(() => console.log( 'Database Connected' ))
        .catch(console.log)
        
const app = express();

app.use( cookieSession({
  maxAge : 30 * 24 * 60 * 60 * 1000,
  keys : [ keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());


routes(app);


app.listen(process.env.PORT || 5000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
