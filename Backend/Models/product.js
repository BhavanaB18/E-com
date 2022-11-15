const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    cart_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Cart"
    },
    name:String,
    desc:String,
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

