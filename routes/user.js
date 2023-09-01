
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

const passport = require('passport');

router.get('/',function(req,res){
     return res.send("Well come users page");
});

router.get('/login',userController.login);
router.get('/registration',userController.registration);
router.get('/sign-out',userController.destroySession);
router.post('/create',userController.createUser);

//use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate(
       'local',
       {failureRedirect:'/user/login'},

       ),userController.createSession);


router.use('/record',require('./record'));       
module.exports = router;