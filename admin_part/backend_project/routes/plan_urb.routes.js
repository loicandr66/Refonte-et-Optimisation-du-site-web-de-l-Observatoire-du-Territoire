const express = require('express');
const router = express.Router();
const planController = require('../controllers/plan_urb.controller');
const { verifyToken } = require('../middleware/authJWT');


router.get('/', planController.findAll);
router.get('/filter/:column/:value', planController.findByColumnValue);

router.use(verifyToken);

router.delete('/delete/:id', planController.remove);
router.post('/add', planController.addPlan);
router.put('/:id', planController.modifyPlan);

module.exports = router;