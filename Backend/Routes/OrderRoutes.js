const express=require("express")
const router=express.Router()
const Cart=require("../Models/Shopping-cart")

router.post("/cart",(req,res)=>{
    let cart=new Cart({
        user_id:req.body._id,
        order_items:req.body.order_items,
        taxPrice:req.body.taxPrice,
        shippingPrice:req.body.shippingPrice,
        totalPrice:req.body.totalPrice
    })
    try{
        console.log("came to backend")
        const saved=cart.save().then((res)=>{
            console.log("Successfully inserted cart")
        })
    }
    catch(err){
        console.log(err)
    }     
})

module.exports=router