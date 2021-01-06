const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    avatar:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    }
})

const Course = mongoose.model('Course',courseSchema)

module.exports = Course