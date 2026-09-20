const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const { verifyToken } = require('../middleware/authJWT');

router.post('/login', adminController.logIn);
router.get('/', adminController.findAll);

router.use(verifyToken);
router.post('/add', adminController.addAdmin);
router.delete('/delete/:id', adminController.deleteAdmin);

module.exports = router;
