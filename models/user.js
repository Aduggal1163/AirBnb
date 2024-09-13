const mongoose=require("mongoose");
const Schema=mongoose.Schema;
//by default passport local mongoose username ,hash and salt wala feild vi add krdega to store username and same with password to
const passportLocalMongoose=require("passport-local-mongoose");
const userSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    //username password khud store hojega
})

userSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",userSchema);