import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllEquipment, deleteEquipment } from '../services/apiService';
import './EquipmentList.css'; // Make sure this CSS file exists and is correctly imported
const EquipmentList = () => {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const equipmentData = await getAllEquipment();
        setEquipment(equipmentData);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchEquipment();
  }, []);
const navigate = useNavigate();
  // Define handleEditClick function here
  const handleEditClick = (id) => {
    navigate(`/edit/${id}`);
  };  
const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this equipment?')) {
      try {
        await deleteEquipment(id);
        setEquipment(equipment.filter((item) => item.id !== id));
      } catch (error) {
        setError(error);
      }
    }
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h1>Equipment List</h1>
      <ul>
        {equipment.map((item) => (
          <li key={item.id}>
            {item.name} - {item.status}
            <button onClick={() => handleEditClick(item.id)}>
  	      Edit
	    </button>
            <button onClick={() => handleDelete(item.id)}>
              Delete
            </button>
	   </li>
        ))}
      </ul>
    </div>
  );
};
export default EquipmentList;