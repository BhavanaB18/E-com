const express=require("express")
const router=express.Router()
const User=require("../Models/user")


router.get("/",async (req,res)=>{
    const users=await User.find()
    res.json(users)
})

router.post('/register',(req,res)=>{
    const {firstname,lastname,email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if (user){
            res.send({message:"User already registered"})
        }
        else{
            const user=new User({
                firstname,
                lastname,
                email,
                password
            })
            console.log(user)
            user.save(err=>{
                if (err){
                    res.send(err)
                }else{
                    res.send({message:"Successfully Registered, Please Login now"})
                }
            })
        }
    })
})

module.exports=router