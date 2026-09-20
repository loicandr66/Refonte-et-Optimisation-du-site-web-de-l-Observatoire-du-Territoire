const express = require('express');
const router = express.Router();
const texte_loisController = require('../controllers/texte_lois.controller');
const { verifyToken } = require('../middleware/authJWT');



router.get('/', texte_loisController.findAll);
router.get('/filter/:column/:value', texte_loisController.findByColumnValue);

router.use(verifyToken);

router.delete('/delete/:id', texte_loisController.remove);
router.post('/add', texte_loisController.addLoi);
router.put('/:id', texte_loisController.modifyLoi);

module.exports = router;