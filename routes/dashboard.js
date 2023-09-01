
const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard_controller');
const passport = require('passport');

router.get('/',passport.checkAuthentication,dashboardController.dashboard);

module.exports = router;