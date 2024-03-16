import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEquipmentById, updateEquipment } from '../services/apiService';
const EditEquipment = () => {
  const { id } = useParams(); // This gets the equipment ID from the URL
  const navigate = useNavigate(); // This is used to navigate back to the equipment list after the update
  const [equipment, setEquipment] = useState({
    name: '',
    status: '',
    condition: '',
    loanPeriod: '',
    // Add other equipment fields as necessary
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchEquipmentDetails = async () => {
      try {
        const equipmentData = await getEquipmentById(id);
        setEquipment(equipmentData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchEquipmentDetails();
  }, [id]);
// eslint-disable-next-line no-unused-vars
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEquipment((prevEquipment) => ({
      ...prevEquipment,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateEquipment(id, equipment);
      navigate('/'); // Redirect to the equipment list
    } catch (error) {
      setError(error);
    }
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Equipment</h1>
      {/* Create form inputs for each equipment field /}
      <label>
	Name:
        <input type="text" value={equipment.name} onChange={handleChange} />
      </label>
      {/ Repeat for other fields like status, condition, and loanPeriod */}
      <button type="submit">Save Changes</button>
    </form>
  );
};
export default EditEquipment;