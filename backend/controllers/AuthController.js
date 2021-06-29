const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



const register = (req, res, next) =>{
    bcrypt.hash(req.body.password, 6, function(err, hashedpass){
        if(err){
            res.json({
                error: err
            })
        }
            let user = new User ({
                name: req.body.name,
                password: hashedpass
            })
        
            user.save()
            .then(user => {
                res.json({
                    massage: 'user Added Successfully!'
                })
            })
        
            .catch(error => {
                res.json({
                    message: 'An error occured'
                })
            })
        
    })
   
}

module.exports ={register }