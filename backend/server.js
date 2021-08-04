<<<<<<< HEAD
const cors = require("cors");
const exp = require("express");
const bp = require("body-parser");
const passport = require("passport");
const { connect } = require("mongoose");
const { success, error } = require("consola");
const gridfs = require("gridfs-stream");
const fs = require('fs');
const imageRoutes = require('./routes/image');
testAPIRouter = require("./routes/testAPI");
=======
const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");

// const users = require("./routes/users");
const AuthRoute = require('./routes/auth')
>>>>>>> parent of 6deee41 (update)


require("dotenv").config();

<<<<<<< HEAD

// Middlewares
app.use(cors());
app.use(bp.json());
app.use(passport.initialize());



// User Router Middleware
app.use("/api/auth", require("./routes/auth"));
app.use("/api/post", require("./routes/post"));
app.use("/api/user", require("./routes/users"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/approver", require("./routes/approver"));
// app.use('/api/image', imageRoutes);


app.use("/testAPI",testAPIRouter);



const startApp = async () => {
  try {
    // Connection With DB
    await connect(DB, {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

    success({
      message: `Successfully connected with the Database \n${DB}`,
      badge: true
    });

    // Start Listenting for the server on PORT
    app.listen(PORT, () =>
      success({ message: `Server started on PORT ${PORT}`, badge: true })
    );
  } catch (err) {
    error({
      message: `Unable to connect with Database \n${err}`,
      badge: true
    });
    startApp();
  }
=======
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
>>>>>>> parent of 6deee41 (update)
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