const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");

// const users = require("./routes/users");
const AuthRoute = require('./routes/auth')


require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// app.use(require("./routes/record"));
// get driver connection
// const dbo = require("./db/conn");
 
const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("myFirstDatabase");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};

// const userRouter = require('./routes/users')
 // Passport middleware
// app.use(passport.initialize());
// Passport config
// require('./config/passport') (passport);
// Routes
app.use('/auth', AuthRoute);
app.listen(port, () => {
  // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
 
//   });
  console.log(`Server is running on port: ${port}`);
});
 app.use('/api', AuthRoute)