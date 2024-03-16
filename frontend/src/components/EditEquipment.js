import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getEquipmentById, updateEquipment } from '../services/apiService';
const EditEquipment = () => {
  const { id } = useParams(); // This gets the equipment ID from the URL
  const history = useHistory(); // This is used to navigate back to the equipment list after the update
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEquipment((prevEquipment) => ({
      ...prevEquipment,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEquipment(id, equipment);
      history.push('/'); // Redirect to the equipment list
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
        <input
          type="text"
          name="name"
          value={equipment.name}
          onChange={handleChange}
        />
      </label>
      {/ Repeat for other fields like status, condition, and loanPeriod */}
      <button type="submit">Save Changes</button>
    </form>
  );
};
export default EditEquipment;