const express = require('express');
const router = express.Router();
const statsController = require('../controllers/stats.controller');
const { verifyToken } = require('../middleware/authJWT');



router.get('/', statsController.findAll);
router.get('/filter/:column/:value', statsController.findByColumnValue);

router.use(verifyToken);

router.delete('/delete/:id', statsController.remove);
router.post('/add', statsController.addStats);
router.put('/:id', statsController.modifyStat);


module.exports = router;