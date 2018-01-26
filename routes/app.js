 var express = require('express');
var router = express.Router();
var User=require('./../model/user')

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get("/user",(req,res)=>{
    User.findOne({},(err,doc)=>{
        if(err){
            return res.send(404);
        }
        res.render('node',{
           user:doc 
        })
    })
})

// router.get('/message/:message', function (req, res, next) {
//     res.render('message',{
//         message:req.params.message
//     });
// });

router.post("/message",function(req,res,next){
    var message=req.body.message;
    var user=new User({
        firstname:'sabin',
        lastname:'shrestha',
        password:'super-screte',
        email:req.body.email
    });
   user.save();
    res.redirect('/');
})

module.exports = router;
