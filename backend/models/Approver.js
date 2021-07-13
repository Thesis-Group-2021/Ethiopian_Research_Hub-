const Mongoose = require("mongoose")

const Schema = Mongoose.Schema

const instituteSchema = new Schema ({
    id:{
        type: Number
    },
    username:{
        type: String
    },
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    password: {
        type: String
    },
    gender:{
        type: String
    },
    profilepicture:{
        type:Number
    },
    address:{
        type:String
    },
    department:{
        type: String
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
