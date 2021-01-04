const path=require('path')
const express=require('express')
const hbs=require('hbs')
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

//Define Path for express config
const publicPath=path.join(__dirname,'./public')
const viewsPath=path.join(__dirname,'./views')

app.set('view engine','hbs')
app.set('views',viewsPath)

app.use(express.static(publicPath))
app.use(express.json())
app.use(courseRouter)
app.use(resourceRouter)

// app.get('/about',(req,res) =>{
//     res.render('about')
// })


app.listen(port,() =>{
    console.log('Server has started')
})
