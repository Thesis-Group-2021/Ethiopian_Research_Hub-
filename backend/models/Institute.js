const Mongoose = require("mongoose")

const Schema = Mongoose.Schema

const instituteSchema = new Schema ({
    id:{
        type: Number
    },
    name:{
        type: String
    },
    password: {
        type: String
    },
    profilepicture:{
        type:Number
    },
    address:{
        type:String
    },
    phone:{
        type:Number
    },
    
    email:{
        type:char
    },
    under :{
        type:String
    },
    date:{
        type: Date
    }

}, {
    timestamps: true
})

const User = Mongoose.model('Institute', instituteSchema)
module.exports = Institute
