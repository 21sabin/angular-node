

const express=require("express");
const router=express.Router();
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")

const User=require("./../model/user");

router.post("/",(req,res,next)=>{
    var user=new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,10)
    })

    user.save((err,result)=>{
        if(err){
            return res.status(500).json({
                title:"signup failed!",
                error:err
            })
        }
        res.status(201).json({
            title:'sucesfully singup',
            obj:result
        })
    })
})

router.post("/signin",(req,res,next)=>{
    User.findOne({email:req.body.email},(err,user)=>{
        if(err){
            return res.status(500).json({
                title:"user credentials didnot matched",
                error:err
            })
        }
        if(!user){
            res.status(401).json({
                title:"email not found"
            })
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }

        var token=jwt.sign({user:user},'secret',{expiresIn:7200});
        res.status(200).json({
            message:'sucesfully loged in',
            token:token,
            userId:user._id
        })
    })
})


module.exports=router;