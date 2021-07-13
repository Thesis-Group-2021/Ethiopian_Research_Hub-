const Mongoose = require("mongoose")

const Schema = Mongoose.Schema

const clientSchema = new Schema ({
    id:{
        type: Number
    },
    username:{
        type: String
    },
    password: {
        type: String
    },
    firstname:{
        type: String
    },
    lastname:{
        type:String

    },
    gender:{
        type: String

    },
    institute:{
       type:String

    },
    profilepicture:{
        type:Number
    },
    email:{
        type:char
    },
    academiclevel :{
        type:String
    },
    year :{
        type:Date
    },
    date:{
        type: Date
    }

}, {
    timestamps: true
})

const User = Mongoose.model('Client', clientSchema)
module.exports = Client
