const Mongoose = require("mongoose")

const Schema = Mongoose.Schema

const userSchema = new Schema ({
   
    username:{
        type: String,
        required:true
    },
    password: {
        type: String

    },
    // firstname:{
    //     type: String,
    //     required:true
    // },
    // lastname:{
    //     type: String,
    //     required:true
    // },
    // gender:{
    //     type: String,
    //     required:true
    // },
    // institute:{
    //     type: String,
    //     required:true
    // },
    // profile_picture:{
    //     type: String
    // },
    // phone:{
    //     type: String,
    //     required:true
    // },
    // email:{
    //     type: String,
    //     required:true
    // },
    // academic_level:{
    //     type: String,
    //     required:true
    // },
    // year:{
    //     type: String,
    //     required:true
    // },
    // date:{
    //     type: String,
    //     required:true
    // },

    role: {
        type: String,
        default: "user",
        enum: ["user", "admin", "superadmin","Approver"]
    },


}, {
    timestamps: true
})

const User = Mongoose.model('User', userSchema)
module.exports = User
