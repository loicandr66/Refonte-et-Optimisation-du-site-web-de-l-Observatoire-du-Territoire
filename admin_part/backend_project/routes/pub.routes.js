const express = require('express');
const router = express.Router();
const pubController = require('../controllers/pub.controller');
const { verifyToken } = require('../middleware/authJWT');



router.get('/', pubController.findAll);
router.get('/filter/:column/:value', pubController.findByColumnValue);

router.use(verifyToken);

router.delete('/delete/:id', pubController.remove);
router.post('/add', pubController.addPub);
router.put('/:id', pubController.modifyPub);


module.exports = router;