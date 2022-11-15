const mongoose=require("mongoose")

const cartSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        refer:"User",
        required:true
    },
    order_items:[{
        product_id:{
            type:mongoose.Schema.Types.ObjectId,
            refer:"Product",
            required:true
        },
        name:{type:String,required:true},
        qty:{type:Number,required:true},
        image:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        }
    }],
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
      shippingPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
      totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
      }
})

const Cart=mongoose.model("Cart",cartSchema)

module.exports=Cart
