import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import statesData from "../data/states.json";
import images from "../assets/images";

function FoodPage() {
  const { state } = useParams();
  const navigate = useNavigate();
  const stateData = statesData.find((s) => s.state === state);

  const [selectedFood, setSelectedFood] = useState(null);

  return (
    <div
      className="container py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(50deg, #8a828a3f, #686567ff)",
      }}
    >
      <h2
        className="text-center mb-5"
        style={{
          fontFamily: "'Brush Script MT', cursive",
          fontSize: "3rem",
          fontWeight: "bold",
         color: "#fbf9fcff",
          textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
        }}
      >
        {state} - Food Specialties
      </h2>

      {!selectedFood && (
        <div
          className="d-flex flex-wrap justify-content-center align-items-center"
          style={{ gap: "30px" }}
        >
          {stateData.food.map((f) => (
            <div
              key={f.name}
              className="card shadow food-card"
              style={{
                width: "260px",
                cursor: "pointer",
                borderRadius: "15px",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onClick={() => setSelectedFood(f)}
            >
              <img
                src={images[f.name] || images["placeholder"]}
                alt={f.name}
                style={{
                  height: "180px",
                  objectFit: "cover",
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
              <div className="card-body text-center">
                <h5
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    fontFamily: "'Lucida Handwriting', cursive",
                     color: "#303050ff",
                  }}
                >
                  {f.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedFood && (
        <div
          className="content-box shadow"
          style={{
            maxWidth: "700px",
            
            background: "linear-gradient(135deg, #ffffff, #908d90ff)",
            margin: "40px auto",
            padding: "25px",
            borderRadius: "15px",
            fontSize: "1.6rem",
            lineHeight: "1.7",
            color: "#333",
          }}
        >
          <h3 style={{ fontWeight: "bold", color: "#353237ff" }}>
            {selectedFood.name}
          </h3>
          <p>
            <strong>Description:</strong> {selectedFood.description}
          </p>
          <p>
            <strong>Recipe Tip:</strong> {selectedFood.recipe_tip}
          </p>
          <div className="mt-3 d-flex gap-3">
            <button
              className="btn btn-primary"
              onClick={() => setSelectedFood(null)}
            >
              Back to Food
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/")}
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodPage;










