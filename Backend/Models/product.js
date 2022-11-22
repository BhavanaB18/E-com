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

// Product.insertMany(Products)

 
module.exports=Product

