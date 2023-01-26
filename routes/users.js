var express = require('express');
var router = express.Router();
var User = require('../models/users')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/new', (req, res) => {
  User.findOne({user : req.body.user}).then((data) =>{
    if(data !== null){
      res.json({result : false , user : "already exist"})
    }

    else {
      const newUser = new User({
        user : req.body.user, 
        date : new Date()
      })
      newUser.save().then(res.json({result : true, user : newUser}))
    }

  })
})



module.exports = router;
