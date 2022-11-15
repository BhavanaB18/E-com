const express=require("express")
const asyncHandler=require("express-async-handler")
const router=express.Router()
const Product =require("../Models/product")


//Fetch all products
//route   GET/api/products
router.get("/",asyncHandler(async (req,res)=>{
    const products=await Product.find({})

    res.json(products)
}))

export default router