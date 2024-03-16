const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
// More routes for updating and deleting users will be added here
module.exports = router;