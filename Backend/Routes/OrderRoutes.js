const express=require("express")
const router=express.Router()
const Cart=require("../Models/Shopping-cart")
const Order=require("../Models/Shop_order")

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

router.post('/proceed',(req,res)=>{
    const {user_id,address,zipcode,total}=req.body
    // console.log(address,zipcode,user_id,total)
    
    
        const order=new Order({
            user_id:user_id,
            shipping_addr:address,
            zipcode:zipcode,
            order_total:total
        })
        order.save(err=>{
            if(err){
                res.send(err)
            }
            else{
                res.send({message:"Payment Successfully Done"})
            }
        })
    }   
)


module.exports=router