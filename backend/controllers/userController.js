const mongoose=require("mongoose");
const errorHandler = require("../utils/errorHandler.js");
const catchAsyncError =require("../middleware/catchAsyncErrors");
const User=require("../models/userModel");
const passport=require("passport");
exports.registerUser=catchAsyncError(async function(req,res,next){
        
    User.register({name:req.body.name,
        email:req.body.username,
        username:req.body.username,
        stepsWalked:0,
        stepsTarget:0,
        performedDate:0,
        scheduledDate:0,
        calorieIntake:0,
        calorieTarget:0,
        proteinConsumed:0,
        proteinTarget:0,
        carbConsumed:0,
        carbTarget:0,
        fatConsumed:0,
        fatTarget:0,
        active: false}, req.body.password, function(err, user) {
            if(err) {
              return next(new errorHandler(err))
            }
            else
      passport.authenticate("local")(req,res,function(){
        
    res.status(201).json({
    success:true,
    user
  });
  });
  }
  );
  });
  
 exports.loginUser=catchAsyncError(async function(req,res,next){
    const user=await User({
        username:req.body.username,
        password:req.body.password
      })
      
      req.login(user,async function(err){
        if(err){
          console.log(err);
          }
          else{
             passport.authenticate("local")(req,res,function(){  
                    
          res.status(201).json({
        success:true,
        user
            })
            
          });
        }
     });
     }) ;

exports.logout=catchAsyncError(async function(req, res, next){
            req.logout(function(err) {
              if (err) { return next(err); }
              res.status(201).json({
                success:true,
                
                    })
            });
          });

exports.updateConsumed=catchAsyncError(async function(req,res,next){
    console.log(res.user);
    User.findOneAndUpdate(
        {username:res.user.username},
            {   calorieIntake:calorieIntake+req.body.calorieIntake,
                proteinConsumed:proteinConsumed+req.body.proteinConsumed,
                carbConsumed:   carbConsumed+req.body.carbConsumed,
                fatConsumed:    fatConsumed+req.body.fatConsumed,
                stepsWalked:stepsWalked+req.body.stepsWalked
            },
            {new:true}, 
        function(err, doc) {
    
console.log(res.user);
         const user=res.user;    
res.status(201).json({
    success:true,
    user
        })
        

  });
});
exports.updateTarget=catchAsyncError(async function(req,res,next){
  console.log(res.user);
  User.findOneAndUpdate(
      {email:req.body.email},
          {   calorieTarget:req.body.calorieTarget,
              proteinTarget:req.body.proteinTarget,
              carbTarget:req.body.carbTarget,
              fatTarget:req.body.fatTarget,
              stepsTarget:req.body.stepsTarget
          },
          {new:true}, 
      function(err, doc) {
  
console.log(res.user);
       const user=res.user;    
res.status(201).json({
  success:true,
  user
      })
      

});
});
exports.getallUsers=catchAsyncError(
  async function(req,res,next){
    const users=await User.find({"role":"user"});
    res.status(201).json({
      success:true,
     users
  }
);
  });
  
