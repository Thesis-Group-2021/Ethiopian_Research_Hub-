const Mongoose = require("mongoose")

const Schema = Mongoose.Schema
require('mongoose-type-email');

const profileSchema = new Schema ({
   
   username:{
        type: String,
        required:true
    },
   password: {
        type: String,
        required:true
    },
   name: {
      type: String,
      required:true
    },
   gender: {
      type: String,
      required:true
   },
   profiePicture: {
      type: String,
      required:true
   },
   email:
         Mongoose.SchemaTypes.Email,
   Phone: {
         type: Number,
         required:true
   },
   Date: {
      type: Date,
      required:true
},
    

}, {
    timestamps: true
})

const User = Mongoose.model('User', userSchema)
module.exports = User
