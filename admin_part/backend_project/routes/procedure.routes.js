const express = require('express');
const router = express.Router();
const procController = require('../controllers/procedure.controller');
const { verifyToken } = require('../middleware/authJWT');



router.get('/', procController.findAll);
router.get('/filter/:column/:value', procController.findByColumnValue);

router.use(verifyToken);

router.delete('/delete/:id', procController.remove);
router.post('/add', procController.addProc);
router.put('/:id', procController.modifyProc);


module.exports = router;