const mongoose=require('mongoose');
const bcrypt = require("bcryptjs");
const userModel =new mongoose.Schema({
    email:{
        type:String,
        unique: true,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    conformPassword:{
        type:String,
        required:[true,"conform your password"]
    }
})
userModel.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    this.conformPassword = undefined;
    next();
  });

userModel.methods.correctPassword = async function (
    candidatePassword,
    userPassword
  ) {
    return await bcrypt.compare(candidatePassword, userPassword);
  };
const BookStoreUsers=mongoose.model("BookStoreUsers",userModel)
module.exports=BookStoreUsers