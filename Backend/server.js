const express=require("express")
const dotenv =require("dotenv")
const connectDB=require("./config/db")
const productroutes=require("./Routes/Productroutes")
const userRoutes=require('./Routes/UserRoutes')
const Product =require("./Models/product")
const cors = require("cors");
const Review = require("./Models/review")
const app=express()

// app.listen()

app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.json());   //otherwise axios.post for reviews returns the undefined request

dotenv.config()
connectDB() // connected to database

app.use("/users",userRoutes)

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

app.post('/reviews',(req,res)=>{
    let review= new Review({
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
    });
    try{
        
            const saved=review.save().then((response)=>{
            console.log("review inserted")
    })}
    catch(err){
        res.send('error'+err)    
    }
})



