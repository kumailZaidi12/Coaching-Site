const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    format:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }

})

const Resource = mongoose.model('Resource',resourceSchema)

module.exports = Resource