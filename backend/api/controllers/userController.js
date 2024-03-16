const User = require('../models/userModel');
const userController = {
  createUser(req, res) {
    const { name, email, role } = req.body;
    User.create(name, email, role, (newUser) => {
         res.status(201).json(newUser);
       });
     },
  updateUser(req, res) {
    const { id, name, email, role } = req.body;
    User.update(id, name, email, role, (err, updatedUser) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json(updatedUser);
    });
   },
  getAllUsers(req, res) {
    const sql = "SELECT * FROM Users";
    Equipment.db.all(sql, [], (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: "Success",
        data: rows
      });
    });
   },  
  deleteUser(req, res) {
     const id = req.params.id;
     User.delete(id, (err, result) => {
       if (err) {
         res.status(400).json({ error: err.message });
         return;
       }
       res.json(result);
     });
   },
};
module.exports = userController;