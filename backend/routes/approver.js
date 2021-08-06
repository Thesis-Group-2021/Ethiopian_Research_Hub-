const router = require("express").Router();

const Approver = require("../models/Approver");
const Client = require("../models/Approver");

router.route('/add-approver').post((req, res) => {
    
    const username = req.body.username;
    const password =req.body.password;
    const firstname =req.body.firstname;
    const lastname =req.body.lastname;
    const gender =req.body.gender;
    const institute =req.body.institute;
    const profilepicture =req.body.profilepicture;
    const email =req.body.email;
    const academiclevel =req.body.academiclevel;
    const year =req.body.year;
    const date =req.body.date;


    const newApprover = new Approver({
       username,password,firstname,lastname,gender,institute,
        profilepicture,email,academiclevel,date,year
    });

    newApprover.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error: ' + err));

});
router.route('/approver-list').get((req, res) => {
    Approver.find( ) 
    .then(Approver => res.json(Approver))
    .catch(err => res.status(400).json('Error:' + err));
  });
  router.route('/usertotal').get((req, res) => {
   Approver.count(  ) 
    .then(Approver => res.json(Approver))
    .catch(err => res.status(400).json('Error:' + err));
  });


  router.route('/:_id').get((req, res) => {
    const _id = req.params._id;
    Approver.findById(_id)
    .then(data => {
      if (!data)
      res.status(404).send({ message: "id not found" + _id});
      else res.send(data);
    })
    .catch(err => {
      res
      .status(500)
      .send({ message: "error retriving with id" + 
      _id});
    });
  });
  
//   router.route('/update:id').put((req, res, next) => {
//     const clientupdate= new Client({
//       _id: req.params.id,
//       username: req.body.username,
//       password: req.body.password,
//       lastname: req.body.lastname,
//       gender: req.body.gender,
//       institute: req.body.institute,
//       profilepicture: req.body.profilepicture,
//       email: req.body.email,
//       academiclevel: req.body.academiclevel,
//       year: req.body.year,
//       date: req.body.date
      
//     });
//     Client.updateOne({_id: req.params.id}, clientupdate).then(
//       () => {
//         res.status(201).json({
//           message: 'user(Client) updated successfully!'
//         });
//       }
//     ).catch(
//       (error) => {
//         res.status(400).json({
//           error: error
//         });
//       }
//     );
//   });
  
module.exports = router;
