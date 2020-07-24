const mongoose = require('mongoose');
const bcrypt=require('bcrypt')
const{Schema,model}=mongoose

const UserSchema=new Schema({
    username:{type:String,require:true},
    password:{
        type:String,
        require:true,
        set(val){
            return bcrypt.hashSync(val,10)
        }
    },
    name:{type:String,require:true},
    isAdmin:{type:String,default:'0'},  //身份 1->管理员 0->普通用户
})

// 将userschema跟user表结构连接
const User=model('user',UserSchema)
module.exports=User
