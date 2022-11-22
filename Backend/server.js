const express=require("express")
const dotenv =require("dotenv")
const connectDB=require("./config/db")
const productroutes=require("./Routes/Productroutes")
const Product =require("./Models/product")
const cors = require("cors");
const app=express()
// app.listen()

app.use(cors()); 

dotenv.config()

connectDB() // connected to database

      
// app.get('/products',async (req,res)=>{
//     const products=await Product.find()
//     console.log(products)
//     res.json(products)
// })

app.get('/products',async(req,res)=>{
    try {
         await Product.find().then(founddata => res.json(founddata))
    } catch (error) {
        res.status(401).json({message:error.message})
    }
})

const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server Running in ${process.env.NODE_ENV}  mode on port ${PORT}`))

app.get('/',(req,res)=>{
    res.send("API is running....")
})



