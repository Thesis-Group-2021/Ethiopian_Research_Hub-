const router = require("express").Router();

const Institute = require("../models/Institute");

router.route('/add-admin').post((req, res) => {
    
    const name = req.body.name;
    const password =req.body.password;
    const profilepicture =req.body.profilepicture;
    const address =req.body.address;
    const phone =req.body.phone;
    const email =req.body.email;
    const under =req.body.under
    const date =req.body.date;


    const newInstitute = new Institute({
       name,password,profilepicture ,address,phone,email,under,date
    });

    newInstitute.save()
    .then(() => res.json('Institute added'))
    .catch(err => res.status(400).json('Error: ' + err));

});
router.route('/Institute-list').get((req, res) => {
    Institute.find( ) 
    .then(institute => res.json(institute))
    .catch(err => res.status(400).json('Error:' + err));
  });
  router.route('/admintotal').get((req, res) => {
    Institute.count(  ) 
    .then(client => res.json(client))
    .catch(err => res.status(400).json('Error:' + err));
  });


  router.route('/:_id').get((req, res) => {
    const _id = req.params._id;
    Institute.findById(_id)
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
  
  router.route('/update:id').put((req, res, next) => {
    const instituteupdate= new Institute({
      _id: req.params.id,
       name: req.body.name,
       password:req.body.password,
       profilepicture:req.body.profilepicture,
       address:req.body.address,
       phone:req.body.phone,
       email:req.body.email,
       under:req.body.under,
       date:req.body.date
      
    });
    Institute.updateOne({_id: req.params.id}, instituteupdate).then(
      () => {
        res.status(201).json({
          message: 'admin(Institute) updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });
  
module.exports = router;
