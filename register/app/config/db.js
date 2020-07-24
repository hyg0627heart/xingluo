const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/login'
module.exports=app=>{
    mongoose.connect(mongoUrl,{useNewUrlParser:true, useFindAndModify:true, useUnifiedTopology: true},()=>{
        console.log('mongodb connect');
    })
}