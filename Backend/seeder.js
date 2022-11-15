const mongoose=require('mongoose')
const Product=require("./Models/product")
const dotenv=require("dotenv")
const Products=require("./data/products")
const connectDB = require("./config/db")

dotenv.config()
connectDB()

// Product.insertMany(Products)

Product.find(function(err,products){
    if(err){
        console.log(err)
    }else{
        if(products.length==0){
            console.log("No Document inserted")
        }else{
            products.forEach(function(product){
                console.log(product.name,product._id)
            })
        }
    }
})





