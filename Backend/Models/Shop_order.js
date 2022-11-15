const mongoose=require('mongoose')

const orderSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:True,
        refer:"User"
    },
    order_date:Date,
    shipping_addr:String,
    order_total:{type:Number,
        required:true}
})

const Order=mongoose.model("order",orderSchema)

module.exports=Order


