const express = require('express');
const router = express.Router();
const schemaController = require('../controllers/schema.controller');
const { verifyToken } = require('../middleware/authJWT');



router.get('/', schemaController.findAll);
router.get('/filter/:column/:value', schemaController.findByColumnValue);

router.use(verifyToken);

router.delete('/delete/:id', schemaController.remove);
router.post('/add', schemaController.addSchema);
router.put('/:id', schemaController.modifySchema);

module.exports = router;