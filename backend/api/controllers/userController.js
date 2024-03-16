const User = require('../models/userModel');
const userController = {
  createUser(req, res) {
    const { name, email, role } = req.body;
    const newUser = User.create(name, email, role);
    res.status(201).send(newUser);
  },
  getAllUsers(req, res) {
    // This would fetch all user items from the database
    res.status(200).send(userDatabase);
  },
  // More methods for updating and deleting users will be added here
};
module.exports = userController;