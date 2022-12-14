const mongoose=require("mongoose");
const validator=require("validator");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate=require('mongoose-findorcreate');
const userSchema=new mongoose.Schema({
   
    name:
    { type:String,
        required:[true,"Please enter Name"],
    },
  email: { type:String,
    required:[true,"Please enter email"],
    unique:true,
    validate:[validator.isEmail,"Enter Valid Email"]
},

role:{
    type:String,
    required:true,
    default:"user",

},
avatar: {
  public_id: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
},
  stepsWalked:Number,
  stepsTarget:Number,
  performedDate:Date,
  scheduledDate:Date,
  calorieIntake:Number,
  calorieTarget:Number,
  proteinConsumed:Number,
  proteinTarget:Number,
  carbConsumed:Number,
  carbTarget:Number,
  fatConsumed:Number,
  fatTarget:Number,
  feedback:Boolean
});
// requires the model with Passport-Local Mongoose plugged in   
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
const User = new mongoose.model("User",userSchema);
module.exports=User;
