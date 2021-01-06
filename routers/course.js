const express = require('express')
const Course = require('../model/course')
const Resource = require('../model/resource')

const router = new express.Router()

router.post('/course',async (req,res) => {
    const course = new Course({
        avatar:req.body.avatar,
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        duration:req.body.duration
    })
    try {
        await course.save()
        res.status(201).send()
    } catch(e){
        res.status(400).send()
    }
})

router.get('/', async (req,res) =>{
    
    try{
        const courses = await Course.find({},{__v:0})
       // res.render('index',{items:courses})
      // console.log(courses)
       res.render('index',{items:courses})
    } catch(e){
        res.status(400).send()
    }
})


module.exports=router