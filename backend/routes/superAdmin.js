const router = require("express").Router();

const SuperAdmin = require("../models/Super_admin");

router.route('/add-superadmin').post((req, res) => {
    
    const username = req.body.name;
    const password =req.body.password;
   

    const newSuperadmin = new SuperAdmin({
       username,password, address,phone,email,under,date
    });

    newSuperadmin.save()
    .then(() => res.json(' added'))
    .catch(err => res.status(400).json('Error: ' + err));

});
router.route('/superadmin-list').get((req, res) => {
    Institute.find( ) 
    .then(SuperAdmin => res.json(SuperAdmin))
    .catch(err => res.status(400).json('Error:' + err));
  });
  router.route('/totalsuperadmin').get((req, res) => {
    Institute.count(  ) 
    .then(SuperAdmin => res.json(SuperAdmin))
    .catch(err => res.status(400).json('Error:' + err));
  });


  router.route('/:_id').get((req, res) => {
    const _id = req.params._id;
    SuperAdmin.findById(_id)
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
//     const instituteupdate= new Institute({
//       _id: req.params.id,
//        name: req.body.name,
//        password:req.body.password,
//        profilepicture:req.body.profilepicture,
//        address:req.body.address,
//        phone:req.body.phone,
//        email:req.body.email,
//        under:req.body.under,
//        date:req.body.date
      
//     });
//     Institute.updateOne({_id: req.params.id}, instituteupdate).then(
//       () => {
//         res.status(201).json({
//           message: 'admin(Institute) updated successfully!'
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
