const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    subject : {
        type:String,
        required:true
    },
    message : {
        type:String,
        required:true
    }
})

const Review = mongoose.model("review",reviewSchema)

module.exports=Review