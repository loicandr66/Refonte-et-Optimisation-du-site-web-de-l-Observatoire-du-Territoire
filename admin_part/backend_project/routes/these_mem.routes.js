const express = require('express');
const router = express.Router();
const these_memoireController = require('../controllers/these_mem.controller');
const { verifyToken } = require('../middleware/authJWT');



router.get('/', these_memoireController.findAll);
router.get('/filter/:column/:value', these_memoireController.findByColumnValue);

router.use(verifyToken);

router.delete('/delete/:id', these_memoireController.remove);
router.post('/add', these_memoireController.addThese);
router.put('/:id', these_memoireController.modifyThese);


module.exports = router;