const express = require('express')
const Resource = require('../model/resource')
const LearningPath= require('../model/learning')

const router = new express.Router()

router.post('/learningPath', async (req,res) =>{
    const learningPath = new LearningPath({
        course_id:req.body.course_id,
        resourceArray:req.body.resourceArray
    })
    try {
        await learningPath.save()
        res.status(201).send()
    } catch(e){
        res.status(400).send()
    }
})

router.get('/learningPath/:id' ,async (req,res) => {
    try{
        const ids= await LearningPath.find({"course_id":req.params.id},{resourceArray:0,course_id:0})
        // console.log(ids)
        const result = await LearningPath.findById(ids,{resourceArray:1})
        // console.log(typeof  result)
        // console.log(result)
        const resource = await Resource.find({"_id":{"$in":result["resourceArray"]}},{_id:0,__v:0})
      // console.log(resource)
       // res.status(200).send(resource)
        res.render('learn',{list:resource})

    } catch(e){
        res.status(400).send()
    }
})

module.exports=router