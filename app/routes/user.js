
const express = require('express')
const router = express.Router()
const user = require('../controller/user.controller');

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })
  
//create new user
router.post('/user' , user.createUser);

//retriece all user
router.get('/users', user.users);

//retrive a single user with id
router.get('/user' , user.user);

module.exports = router
