import React from 'react';
const EquipmentList = ({ equipment, onEdit }) => {
  return (
    <div>
      <h2>Equipment List</h2>
      <ul>
        {equipment.map((item) => (
          <li key={item.id}>
            {item.name} - {item.status}
            <button onClick={() => onEdit(item.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default EquipmentList;