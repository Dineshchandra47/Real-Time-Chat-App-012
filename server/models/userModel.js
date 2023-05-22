const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required:true,
    min:3,
    max:30
  },
  email:{
    type:String,
    required:true,
    min:20
  },
  password:{
    type: String,
    required:true,
    min:8
  },
  avatarImage:{
    type:String,
    default: ""
  },
  isAvatarSet:{
    type:Boolean,
    default:false,
  }

})


module.exports = mongoose.model("Users", userSchema)