const Mongoose = require("mongoose")

const Schema = Mongoose.Schema

const userSchema = new Schema ({
    name:{
        type: String
    },
    password: {
        type: String,
        required:true

<<<<<<< HEAD
    },

    role: {
        type: String,
        default: "user",
        enum: ["User", "Admin", "Superadmin","Approver"]
    },


=======
    }
>>>>>>> parent of 6deee41 (update)
}, {
    timestamps: true
})

const User = Mongoose.model('User', userSchema)
module.exports = User
