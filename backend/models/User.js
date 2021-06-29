const Mongoose = require("mongoose")

const Schema = Mongoose.Schema

const userSchema = new Schema ({
    name:{
        type: String
    },
    password: {
        type: String

    }
}, {
    timestamps: true
})

const User = Mongoose.model('User', userSchema)
module.exports = User
