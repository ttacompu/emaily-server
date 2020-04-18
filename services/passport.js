const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const keys = require('../config/keys');
const mongoose =  require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) =>{
   done(null, user.id);
});

passport.deserializeUser( () =>{
   User.findOne
})


passport.use(new GoogleStrategy({
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL : "/auth/google/callback"
  }, (accessToken, refreshToken, profile, done) =>{
     User.findOne({ googleId : profile.id }).then( (existingUser)=>{
        if(existingUser){
         done(null, existingUser);
        }else{
         new User({ googleId : profile.id }).save()
            .then(user => done(null, user));

        }
     })
  }));