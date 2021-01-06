const { ObjectID } = require('bson')
const mongoose = require('mongoose')

const learningSchema = new mongoose.Schema({
   course_id:{
    type:ObjectID,
    ref:'Course'
   },
    resourceArray:[{
        type:ObjectID,
        ref:'Resource'
    }]
    
})

const LearningPath = mongoose.model('LearningPath',learningSchema)

module.exports = LearningPath