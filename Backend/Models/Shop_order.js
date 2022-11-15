const mongoose=require('mongoose')
const express=require('express')
const router=express.Router()

url="mongodb+srv://GayathriSS-19:*Saisri6515@e-commerce.9f4cgpo.mongodb.net/Cara?retryWrites=true&w=majority"
mongoose.connect(url)
con=mongoose.connection
con.on("open",function(){
    console.log("Database connected")
})

app=express()
app.listen(5000,function(){
    console.log("Server connected")
})

const orderSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        refer:"user"
    },
    order_date:Date,
    shipping_addr:String,
    order_total:Number
})

const Order=mongoose.model("order",orderSchema)

order1=new Order({
    user_id:"636bb6e7b8c1486af63bc954",
    order_date:new Date(2022,11,10),
    shipping_addr:"Mumbai,Maharastra",
    order_total:2345,
})

order2=new Order({
    user_id:"636bb92546941869a2d50255",
    order_date:new Date(2022,10,10),
    shipping_addr:"kakinada,Andhra Pradesh",
    order_total:5789,
})

order3=new Order({
    user_id:"636bb6e7b8c1486af63bc256",
    order_date:new Date(2022,09,09),
    shipping_addr:"Hyderabad,Telangana",
    order_total:12345,
})

// Order.insertMany([order1,order2,order3],function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Successfully inserted")
//     }
// })

Order.find(function(err,orders){
    if(err)
    {
        console.log(err)
    }
    else{
        orders.forEach(function(order){
            console.log(order._id)
            console.log(order.user_id)
        })
    }
})
