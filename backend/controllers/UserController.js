const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");


/**
 * @DESC To register the user (ADMIN, SUPER_ADMIN, USER)
 */
const userRegister = async (userDets, role, res) => {
  try {
    // Validate the username
    let usernameNotTaken = await validateUsername(userDets.username);
    if (!usernameNotTaken) {
      return res.status(400).json({
        message: `Username is already taken.`,
        success: false
      });
    }

    // Get the hashed password
    const password = await bcrypt.hash(userDets.password, 12);
    // create a new user
    const name = req.body.name;
    const file  = req.body.file;
    const title = req.body.title;
    const description = req.body.descrioption;
    const under = req.body.under;
    const academiclevel = req.body.academiclevel;
    const date = req.body.date;

    const newUser = new User({
      ...userDets,
      password,name,file,title,description,under,academiclevel,date,
      role
     
  
    });

    await newUser.save();
    return res.status(201).json({
      message: "you are successfully registred.",
      success: true
    });
  } catch (err) {
    // Implement logger function (winston)
    return res.status(500).json({
      message: "Unable to create your account.",
      success: false
    });

  }
};

 
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.username = req.body.username || user.email;
    user.pic = req.body.pic || user.pic;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      username: updatedUser.name,
      pic: updatedUser.pic,
      bio: updatedUser.bio,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});


module.exports = {userRegister};