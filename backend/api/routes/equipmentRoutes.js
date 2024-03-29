const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController');
router.post('/equipment', equipmentController.createEquipment);
router.get('/equipment', equipmentController.getAllEquipment);
router.put('/equipment/:id', equipmentController.updateEquipment);
router.delete('/equipment/:id', equipmentController.deleteEquipment);
// More routes for updating and deleting equipment will be added here
module.exports = router;