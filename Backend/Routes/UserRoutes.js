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

router.post('/login',(req,res)=>{
    const {email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if (user){
            if(password===user.password){
                res.send({message:"Login Successful",user:user})
            }
            else{
                res.send({message:"Password didn't match"})
            }

        }else{
            res.send({message:"User not registered"})
        }
    })
})

module.exports=router