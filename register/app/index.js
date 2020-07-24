const express = require('express');
const mongo = require('./config/db');
const routes=require('./router')
const bodyParser=require('body-parser')
// const UserRoute = require('./router/user')
// const registerRoute = require('./router/register')
const router= express.Router()
const app=new express()

mongo(app)

// router.get('/',(req,res)=>{
//     res.send('hello world')
// })
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

routes(app)
// app.use('/user',UserRoute)
// app.use('/register',registerRoute)

app.listen(3000,()=>{
    console.log('server listen at 3000');
})