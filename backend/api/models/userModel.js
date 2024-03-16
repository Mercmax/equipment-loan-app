const db = require('../database.js');
const User = {
  create(name, email, role, callback) {
    const sql = `INSERT INTO users = (name, email, role) VALUES (?, ?, ?)`;
       const params = [name, email, role];
       db.run(sql, params, function(err) {
         if (err) {
           return console.error(err.message);
         }
	 // The this context contains the last ID and changes after the query
         callback({ id: this.lastID, name, email, role });
       });
     },
   update(id, name, email, role, callback) {
     const sql = `UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?`;
     const params = [name, email, role, id];
     db.run(sql, params, function(err) {
       if (err) {
         callback(err);
       } else {
         callback(null, { id, name, email, role });
       }
    });
  },
   delete(id, callback) {
     const sql = `DELETE FROM users WHERE id = ?`;
     db.run(sql, id, function(err) {
       if (err) {
         callback(err);
       } else {
         callback(null, { deletedID: id });
       }
     });
   },	
};
   module.exports = User;