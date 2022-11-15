const mongoose=require('mongoose')
  
//creating a schema
const userSchema =new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },   
    lastname:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User=mongoose.model("User",userSchema)


module.exports = User

