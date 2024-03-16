let equipmentDatabase = [];
const Equipment = {
  create(name, status, condition, loanPeriod) {
    const newEquipment = {
      id: equipmentDatabase.length + 1,
      name,
      status,
      condition,
      loanPeriod
    };
    equipmentDatabase.push(newEquipment);
    return newEquipment;
  },
  // Additional methods for finding, updating, and deleting equipment will go here.
};
module.exports = Equipment;