import React from "react";
import images from "../assets/images";

function StateCard({ state, onPlacesClick, onFoodClick }) {
  return (
    <div className="card h-100 shadow-sm state-card" style={{ cursor: "pointer" }}>
      <img
        src={images[state.state] || images["placeholder"]}
        className="card-img-top"
        alt={state.state}
        style={{ height: "180px", objectFit: "cover", filter: "brightness(0.9)" }}
      />
      <div className="card-body d-flex flex-column text-center">
        <h5 className="state-title">{state.state}</h5>
        <p className="state-description">{state.description}</p>
        <div className="d-flex justify-content-center mt-2">
          <button className="btn btn-outline-primary me-2" onClick={onPlacesClick}>
            Top Places
          </button>
          <button className="btn btn-outline-success" onClick={onFoodClick}>
            Food
          </button>
        </div>
      </div>
    </div>
  );
}

export default StateCard;














