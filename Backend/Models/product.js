const mongoose=require('mongoose')
const dotenv =require("dotenv")
const connectDB = require("../config/db")
const Products = require('../data/products')

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

Product.insertMany(Products)

Product.find(function(err,products){
    if(err){
        console.log(err)
    }else{
        if(products.length==0){
            console.log("No doc present")
        }else{
            products.forEach(function(product){
                console.log(product.name)
            })
        }
    }
})
module.exports=Product

