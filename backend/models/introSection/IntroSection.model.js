const mongoose = require('mongoose')

const IntroSectionSchema = new mongoose.Schema({
    introUser: {
        type:String,
        default:"anubhav"
    },
    introTitle: {
        type:String,
        required:true,
    },
    introHeadline:{ 
        type:String,
        required:true,
    },
    introContent:{
        type:String,
        required:true
    },
    introButtonText: {
        type:String,
        required:true
    }
},{timestamps:true})

const IntroModel = mongoose.model('IntroSection',IntroSectionSchema)

module.exports = IntroModel