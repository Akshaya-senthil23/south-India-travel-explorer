import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PlacesPage from "./pages/PlacesPage";
import FoodPage from "./pages/FoodPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import background from './assets/images/background.png'; // <-- import image

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative", // important for overlay
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(77, 77, 72, 0.9)",
          zIndex: 0,
        }}
      />

      {/* Actual content goes on top */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/places/:state" element={<PlacesPage />} />
            <Route path="/food/:state" element={<FoodPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;











