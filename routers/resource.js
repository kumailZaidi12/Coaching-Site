const express = require('express')
const Resource = require('../model/resource')

const router = new express.Router()

router.post('/resource',async (req,res) => {
    const resource = new Resource({
        title:req.body.title,
        format:req.body.format,
        link:req.body.link
    })
    try {
        await resource.save()
        res.status(201).send(resource)
    } catch(e){
        res.status(400).send()
    }
})

router.get('/resource/all',async (req,res) =>{
    const resource=  await Resource.find({})
    try {
        res.status(200).send(resource)
    } catch (e) {
        res.status(400).send()
    }
})


module.exports=router