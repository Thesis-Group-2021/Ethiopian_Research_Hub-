const router = require("express").Router();

// const postRegister = require("../controllers/PostController");
const Post = require('../models/Post');


// router.route('/add-post').post((req, res) => {
//     postRegister(req.body, res);
//   });
  


router.route('/add-post').post((req, res) => {
    const username = req.body.username;
    const name =req.body.name;
    const file =req.body.file;
    const title =req.body.title;
    const description =req.body.description;
    const department =req.body.department;
    const under =req.body.under;
    const academiclevel =req.body.academiclevel;
    const date =req.body.date;
    const status =req.body.status;


    const newPost = new Post({
        username,name,file,title,description,
        department,under,academiclevel,date,status
    });

    newPost.save()
    .then(() => res.json('Post added'))
    .catch(err => res.status(400).json('Error: ' + err));

});
router.route('/post-list').get((req, res) => {
    Post.find(  ) 
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error:' + err));
  });
  router.route('/total-post').get((req, res) => {
    Post.count(  ) 
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error:' + err));
  });

module.exports = router;