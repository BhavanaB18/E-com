const mongoose=require('mongoose')

const productSchema=mongoose.Schema({

    name:String,
    desc:String,
    image:{
        type:String,
        required:true
    },
    regular_p:{
        type:Number,
        required:true,
        default:0
    },
    discount_p:{
        type:Number,
        required:true,
        default:0
    },
    Quantity:{
        type:Number,
        required:true,
        default:0
    }
})

const Product=mongoose.model("product",productSchema)

module.exports=Product

