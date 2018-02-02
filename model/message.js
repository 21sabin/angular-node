var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var User=require('./user')

var schema=new Schema({
    content:{type:String,required:true},
    user:{type:Schema.Types.ObjectId,ref:'User'}
});

//when remove action is instanciated in message model this function will be automatically executed in message model
schema.post('remove',(message)=>{
    User.findById(message.user,(err,user)=>{
        user.messages.pull(message);
        user.save();
    })
})

module.exports=mongoose.model("Message",schema)