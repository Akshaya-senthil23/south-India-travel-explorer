import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PlacesPage from "./pages/PlacesPage";
import FoodPage from "./pages/FoodPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/places/:state" element={<PlacesPage />} />
        <Route path="/food/:state" element={<FoodPage />} />
      </Routes>
    </Router>
  );
}
export default App;











