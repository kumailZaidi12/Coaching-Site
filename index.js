//Ya Ali Madad
const express = require('express')
const mongoose = require('mongoose')
const resourceRouter=require('./routers/resource')
const courseRouter = require('./routers/course')

mongoose.connect('mongodb://127.0.0.1:27017/coaching-manager-api', {
 useNewUrlParser: true,
 useCreateIndex: true,
 useUnifiedTopology: true
})


const app=express()
const port=process.env.PORT || 3000

app.use(express.json())
app.use(resourceRouter)
app.use(courseRouter)

app.get('/',(req, res) =>{
    res.send('hello')
})
app.listen(port,() =>{
    console.log('Server has started')
})
