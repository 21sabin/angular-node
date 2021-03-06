const express=require("express");
const router=express.Router();
var Message=require("./../model/message");
const jwt=require('jsonwebtoken');

const User=require('./../model/user')


router.get("/",(req,res,next)=>{

    Message.find({},(err,result)=>{
        if(err){
            return  res.status(500).json({
                 title:"Message get error",
                 error:err
             })
         }

         res.status(200).json({
            title:"sucess",
            obj:result
        })

    })

})

// router.use('/',(req,res,next)=>{
//    jwt.verify(req.query.token,'secret',(err,decoded)=>{
//     if(err){
//         return res.status(401).json({
//             message:'Not authorized',
//             err:err
//         })
//     }
//     next();
//    })
// })

//This code is executed for every request to the router
router.use(function(req,res,next){
    jwt.verify(req.query.token,'secret',(err,decoded)=>{
        if(err){
           return res.status(401).json({
                message:'not authorized',
                error:err
            })
        }
        next();
    })
});

router.post("/",(req,res,next)=>{
    var decoded=jwt.decode(req.query.token);
     User.findById(decoded.user._id,(err,user)=>{
                if(err){
                    return  res.status(500).json({
                        title:"An error occured",
                        error:err
                    })
                }
                
                let message=new Message({
                    content:req.body.content,
                    user:user
                });
            
                message.save((err,result)=>{
                    if(err){
                    return  res.status(500).json({
                            title:"message is not cereated",
                            error:err
                        });
                    }
                    user.messages.push(result);
                    user.save();
                    
                    res.status(201).json({
                        title:"saved message",
                        obj:result
                    })

            })
  
   })
});


router.patch("/:id",(req,res,next)=>{
    Message.findById(req.params.id,(err,message)=>{
        if(err){
            res.status(500).json({
                title:"error occured",
                error:err
            })
        }
        if(!message){
            res.status(500).json({
                title:"A message not found",
                error:{message:"message not found"}
            })
        }
        message.content=req.body.content;
        message.save((err,result)=>{
            if(err){
               return res.status(400).json({
                    title:"an error occured",
                    error:err
                })
            }
            res.status(200).json({
                title:"saved message",
                obj:message
            })
        })
    })
})

router.delete("/:id",(req,res,next)=>{
    Message.findById(req.params.id,(err,message)=>{
        if(err){
            res.status(500).json({
                title:"error occured",
                error:err
            })
        }
        if(!message){
            res.status(500).json({
                title:"A message not found",
                error:{message:"message not found"}
            })
        }
        message.remove((err,result)=>{
            if(err){
               return res.status(400).json({
                    title:"an error occured",
                    error:err
                })
            }
            res.status(200).json({
                title:"deleted message",
                obj:message
            })
        })
    })
})

module.exports=router;