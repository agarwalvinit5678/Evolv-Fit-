const mongoose=require("mongoose");
const errorHandler = require("../utils/errorHandler.js");
const catchAsyncError =require("../middleware/catchAsyncErrors");
const User=require("../models/userModel");
const passport=require("passport");
const cloudinary = require("cloudinary");

exports.registerUser=catchAsyncError(async function(req,res,next){
  // console.log(req.body);
      const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: "avatars",
        width: 120,
        height:120,
        gravity: 'faces',
        crop: 'thumb'
      });

    User.register({name:req.body.name,
        email:req.body.username,
        username:req.body.username,
        avatar: {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        },
        stepsWalked:0,
        stepsTarget:0,
        performedDate:00-00-0000,
        scheduledDate:00-00-0000,
        calorieIntake:0,
        calorieTarget:0,
        proteinConsumed:0,
        proteinTarget:0,
        carbConsumed:0,
        carbTarget:0,
        fatConsumed:0,
        fatTarget:0,
        feedback:true,
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
        {username:req.body.username},
            {   calorieIntake:req.body.calorieIntake,
                proteinConsumed:req.body.proteinConsumed,
                carbConsumed:req.body.carbConsumed,
                fatConsumed:req.body.fatConsumed,
                stepsWalked:req.body.stepsWalked
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
//   console.log(res.user);
//   User.findOneAndUpdate(
//       {email:req.body.email},
          // {   calorieTarget:req.body.calorieTarget,
          //     proteinTarget:req.body.proteinTarget,
          //     carbTarget:req.body.carbTarget,
          //     fatTarget:req.body.fatTarget,
          //     stepsTarget:req.body.stepsTarget
          // },
//           {new:true}, 
//       function(err, doc) {
  
// console.log(res.user);
//        const user=res.user;    
// res.status(201).json({
//   success:true,
//   user
//       })
      

// });
// });
console.log(req.body);
User.findOneAndUpdate(

    {username:req.body.username},
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
  
