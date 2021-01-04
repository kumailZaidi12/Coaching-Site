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
        duration:req.body.duration,
        resourceArray:req.body.resourceArray
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
        const courses = await Course.find({},{resourceArray:0,__v:0})
       // res.render('index',{items:courses})
       res.render('index',{items:courses})
    } catch(e){
        res.status(400).send()
    }
})

router.get('/course/:id' ,async (req,res) => {
    try{
        const result = await Course.findById(req.params.id,{resourceArray:1})
        const resource = await Resource.find({"_id":{"$in":result["resourceArray"]}},{_id:0,__v:0})
        res.render('learn',{list:resource})

    } catch(e){
        res.status(400).send()
    }
})

module.exports=router