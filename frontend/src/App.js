import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EquipmentList from './components/EquipmentList';
import EditEquipment from './components/EditEquipment'; // You will create this component next
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={EquipmentList} />
        <Route path="/edit-equipment/:id" component={EditEquipment} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
};
export default App;