
const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');


router.get('/',function(req,res){
     
     return res.send("Well come users page");
});

router.get('/login',userController.login);

router.get('/registration',userController.registration);



module.exports = router;