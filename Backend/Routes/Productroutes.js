const express=require("express")
const asyncHandler=require("express-async-handler")
const router=express.Router()
const Product =require("../Models/product")


//Fetch all products
//route   GET/api/products

router.get('/',async(req,res)=>{
    try {
         await Product.find().then(founddata => res.json(founddata))
    } catch (error) {
        res.status(401).json({message:error.message})
    }
})


module.exports= router