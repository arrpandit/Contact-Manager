
const mongoose = require('mongoose')

const contactModel = mongoose.Schema({
    name:{
        type:String,
        required : [true,"Please add the name"]
    },
    email:{
        type:String,
        required : [true,"Please add the email"]
    },
    phone:{
        type:Number,
        required : [true,"Please add the phone no"]
    }
})

module.exports = mongoose.model("Contact",contactModel)