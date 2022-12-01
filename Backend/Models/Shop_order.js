const mongoose=require('mongoose')

const orderSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refer:"User"
    },
    shipping_addr:String,
    zipcode:String,
    order_total:{type:Number,
        required:true}
})

const Order=mongoose.model("order",orderSchema)

module.exports=Order


