import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StateCard from "../components/StateCard";
import statesData from "../data/states.json";

function Dashboard() {
  const [states, setStates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => setStates(statesData), []);

  const handlePlacesClick = (state) => navigate(`/places/${state.state}`);
  const handleFoodClick = (state) => navigate(`/food/${state.state}`);

  return (
    <div className="dashboard-container py-5">
      <h1 className="dashboard-title">South India Travel Explorer</h1>
      <p className="dashboard-subtitle">
        Discover the culture, heritage, and delicious cuisine of South India.
      </p>

      <div className="row justify-content-center g-4">
        {states.map((s, index) => (
          <div
            key={s.id}
            className={`col-sm-6 col-md-4 d-flex justify-content-center ${
              index >= 3 ? "col-md-5" : ""
            }`}
          >
            <StateCard
              state={s}
              onPlacesClick={() => handlePlacesClick(s)}
              onFoodClick={() => handleFoodClick(s)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;















