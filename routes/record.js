
const  express = require('express');
const router = express.Router();

const recordController = require('../controllers/record_controller');

router.post('/create',recordController.create);
router.get('/delete/:id',recordController.delete);


router.post('/delete-many',recordController.deleteMany);

module.exports = router;