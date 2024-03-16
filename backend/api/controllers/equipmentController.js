const Equipment = require('../models/equipmentModel');
const equipmentController = {
  createEquipment(req, res) {
    const { name, status, condition, loanPeriod } = req.body;
    const newEquipment = Equipment.create(name, status, condition, loanPeriod);
    res.status(201).send(newEquipment);
  },
  getAllEquipment(req, res) {
    // This would fetch all equipment items from the database
    res.status(200).send(equipmentDatabase);
  },
  // More methods for updating and deleting equipment will be added here
};
module.exports = equipmentController;