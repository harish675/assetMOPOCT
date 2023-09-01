
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/',homeController.homePage);
router.use('/user',require('./user'));
router.use('/dashboard',require('./dashboard'));
module.exports = router;