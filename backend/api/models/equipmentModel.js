const db = require('../database.js');
const Equipment = {
  create(name, status, condition, loanPeriod, callback) {
    const sql = `INSERT INTO equipment (name, status, condition, loanPeriod) VALUES (?, ?, ?, ?)`;
       const params = [name, status, condition, loanPeriod];
       db.run(sql, params, function(err) {
         if (err) {
           return console.error(err.message);
         }
         // The this context contains the last ID and changes after the query
         callback({ id: this.lastID, name, status, condition, loanPeriod });
       });
     },
  update(id, name, status, condition, loanPeriod, callback) {
    const sql = `UPDATE equipment SET name = ?, status = ?, condition = ?, loanPeriod = ? WHERE id = ?`;
       const params = [name, status, condition, loanPeriod, id];
       db.run(sql, params, function(err) {
         if (err) {
           callback(err);
         } else {
           callback(null, { id, name, status, condition, loanPeriod });
       }
     });
   },
  delete(id, callback) {
    const sql = `DELETE FROM equipment WHERE id = ?`;
    db.run(sql, id, function(err) {
     if (err) {
       callback(err);
     } else {
       callback(null, { deletedID: id });
     }
    });
  },	
// Other CRUD operations will be implemented similarly using the database
};
module.exports = Equipment;