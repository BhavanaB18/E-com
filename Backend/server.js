 

const express=require("express")
const dotenv =require("dotenv")
const connectDB=require("./config/db")

const app=express()
// app.listen()
dotenv.config()

connectDB() // connected to database


const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`Server Running in ${process.env.NODE_ENV}  mode on port ${PORT}`))

app.get('/',(req,res)=>{
    res.send("API is running....")
})

