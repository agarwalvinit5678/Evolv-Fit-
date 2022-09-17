const express= require("express");
const app=express();
const errMiddleware=require("./middleware/error");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const mongoose=require("mongoose");

//storing passport cookies
app.use(session({
    secret:"this is secret",
    resave:false,
    saveUninitialized:false
  }));


app.use(passport.initialize());
app.use(passport.session());

const User=require("./models/userModel");



// use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(function(user,done){
  done(null,user.id);
});
passport.deserializeUser(function(id,done){
  User.findById(id,function(err,user)
  {
    done(err,user);
  });
});

  
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static("public"));

app.use(express.json())

const user=require("./routes/userRoute");
app.use("/api/user",user);

app.use(errMiddleware);

module.exports=app; 