import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EquipmentList from './components/EquipmentList';
import EditEquipment from './components/EditEquipment';
// Import any other necessary components or services here
function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          Equipment Loan Application
        </header>
        <main className="app-body">
          <Routes>
            <Route exact path="/" element={<EquipmentList />} />
            <Route path="/edit/:id" element={<EditEquipment />} />
            {/* Add any other routes here */}
          </Routes>
        </main>
        <footer className="app-footer">
          &copy; 2024 Equipment Loan App
        </footer>
      </div>
    </Router>
  );
}
export default App;