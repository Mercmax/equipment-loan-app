let userDatabase = [];
const User = {
  create(name, email, role) {
    const newUser = {
      id: userDatabase.length + 1,
      name,
      email,
      role,
      loanHistory: []
    };
    userDatabase.push(newUser);
    return newUser;
  },
  // Additional methods for finding, updating, and deleting users will go here.
};
module.exports = User;