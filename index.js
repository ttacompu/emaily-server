const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const passport = require('passport');

require("./models/User")
require("./services/passport");
const routes = require("./routes/authRoutes");
const billingRoutes = require("./routes/billingRoutes");
const bodyParser = require("body-parser");

mongoose.connect(keys.mongoURI, {useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true})
        .then(() => console.log( 'Database Connected' ))
        .catch(console.log)
        
const app = express();

app.use(bodyParser.json());
app.use( cookieSession({
  maxAge : 30 * 24 * 60 * 60 * 1000,
  keys : [ keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());


routes(app);
billingRoutes(app);

if(process.env.NODE_ENV === 'production'){
  //Express 
  app.use(express.static('client/build'));

  const path = require('path');
  app.get("*", (req, res) =>{
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  })
}


app.listen(process.env.PORT || 5000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
