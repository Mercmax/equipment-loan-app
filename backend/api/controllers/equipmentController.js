const Equipment = require('../models/equipmentModel');
   const equipmentController = {
     createEquipment(req, res) {
       const { name, status, condition, loanPeriod } = req.body;
       Equipment.create(name, status, condition, loanPeriod, (newEquipment) => {
         res.status(201).json(newEquipment);
       });
     },
     updateEquipment(req, res) {
       const { id, name, status, condition, loanPeriod } = req.body;
       Equipment.update(id, name, status, condition, loanPeriod, (err, updatedEquipment) => {
        if (err) {
         res.status(400).json({ error: err.message });
        return;
      }
      res.json(updatedEquipment);
    });
  },
     getAllEquipment(req, res) {
       const sql = "SELECT * FROM equipment";
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
   deleteEquipment(req, res) {
       const id = req.params.id;
       Equipment.delete(id, (err, result) => {
        if (err) {
         res.status(400).json({ error: err.message });
         return;
       }
       res.json(result);
     });
   },
};
module.exports = equipmentController;