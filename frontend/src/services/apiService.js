import axios from 'axios';
const API_BASE_URL = 'http://localhost:3000/api'; // Replace with your actual backend server URL
// Function to get all equipment
export const getAllEquipment = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/equipment`);
    return response.data; // This will be the list of equipment
  } catch (error) {
    console.error('Failed to fetch equipment:', error);
    throw error; // Rethrow the error so it can be handled by the caller
  }
};
// Function to create a new equipment item
export const createEquipment = async (equipmentData) => {
     try {
       const response = await axios.post(`${API_BASE_URL}/equipment`, equipmentData);
       return response.data; // This will be the newly created equipment
     } catch (error) {
       console.error('Failed to create equipment:', error);
       throw error;
     }
   };
   // Function to get a single equipment item by ID
export const getEquipmentById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/equipment/${id}`);
    return response.data; // This will be the equipment details
  } catch (error) {
    console.error(`Failed to fetch equipment with ID ${id}:`, error);
    throw error; // Rethrow the error so it can be handled by the caller
  }
};
   // Function to update an existing equipment item
export const updateEquipment = async (id, equipmentData) => {
     try {
       const response = await axios.put(`${API_BASE_URL}/equipment/${id}`, equipmentData);
       return response.data; // This will be the updated equipment
     } catch (error) {
       console.error('Failed to update equipment:', error);
       throw error;
     }
   };
   // Function to delete an equipment item
export const deleteEquipment = async (id) => {
     try {
       const response = await axios.delete(`${API_BASE_URL}/equipment/${id}`);
       return response.data; // This should be some confirmation message
     } catch (error) {
       console.error('Failed to delete equipment:', error);
       throw error;
     }
   };
// Define other API call functions similarly...