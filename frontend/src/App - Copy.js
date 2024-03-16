import React, { useState, useEffect } from 'react';
import './App.css';
import EquipmentList from './components/EquipmentList';
import EditEquipment from './components/EditEquipment';
// Import any other necessary components or services here
function App() {
  // State to store the list of equipment
  const [equipment, setEquipment] = useState([]);
  // State to manage the currently selected equipment for editing
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  // Fetch equipment data from the API when the component mounts
  useEffect(() => {
    // Placeholder for fetch call to get equipment data
    // setEquipment(dataFromApi);
  }, []);
  // Function to handle selecting an equipment item to edit
  const handleEdit = (equipmentId) => {
    // Find the equipment item in the list and set it to selectedEquipment
    const equipmentToEdit = equipment.find(item => item.id === equipmentId);
    setSelectedEquipment(equipmentToEdit);
  };
  return (
      <Router>
      <div className="App">
        <header className="app-header">
          Equipment Loan Application
        </header>
        <main className="app-body">
          <Switch>
            <Route exact path="/" component={EquipmentList} />
            <Route path="/edit/:id" component={EditEquipment} />
            {/* Add any other routes here */}
          </Switch>
        </main>
        <footer className="app-footer">
          &copy; 2024 Equipment Loan App
        </footer>
      </div>
    </Router>
      <div className="App">
      <header className="app-header">
        Equipment Loan Application
      </header>
      <main className="app-body">
        {/* Conditionally render the EquipmentList or EditEquipment component */}
        {selectedEquipment ? (
          <EditEquipment
            equipment={selectedEquipment}
            // Pass any other necessary props or handlers
          />
        ) : (
          <EquipmentList
            equipment={equipment}
            onEdit={handleEdit}
          />
        )}
      </main>
      <footer className="app-footer">
        &copy; 2024 Equipment Loan App
      </footer>
    </div>
  );
}
export default App;