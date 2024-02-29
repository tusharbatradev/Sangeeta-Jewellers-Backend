const mongoose= require("mongoose");

// Defining Schema for the User's
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})

// Creating Model from the UserSchema
const User=mongoose.model("user",userSchema);
module.exports=User;