
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  iss: {
    type: String,
  },
  nfb: {
    type: Number,
  },
  aud: {
    type: String,
  },
  sub: {
    type: String,
    required:true,
  },
  email:{
    type: String,
  },
  email_verified:{
type:Boolean,
  },
  azp:{
    type:String,
  },
  name:{
    type:String,
    required:true,
  },
  picture:{
    type:String,
    required:true,
  },
  given_name:{
    type:String,
  },
  iat:{
    type:String,
  },
  exp:{
    type:Number,
  },
  jti:{
    type:String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = {User} 
