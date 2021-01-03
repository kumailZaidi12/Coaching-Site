const { ObjectID } = require('bson')
const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    resourceArray:[{
        type:ObjectID,
        ref:'Resource'
    }]
    
})

const Course = mongoose.model('Course',courseSchema)

module.exports = Course