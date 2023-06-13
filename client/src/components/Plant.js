import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../UserProvider";
import "./Plant.css";

export default function Plant() {
  const { handleFilter, getPlants, plants } = useContext(UserContext);
  const navigate = useNavigate();
  const [showPlants, setShowPlants] = useState(false);

  const handleClick = () => {
    getPlants();
    setShowPlants(true);
  };



  return (
    <div className="container">
      <h1 className="title">Check Out Our Current Inventory</h1>
      <button onClick={handleClick} className="inventory-button">
        See Plant Inventory
      </button>
     
      <h2>
        I want more<Link to="/info" style={{ padding: 50 }} className="info-link">Information</Link>
      </h2>
      {showPlants && (
        <div className="plant-list">
          {plants.length > 0 ? (
            plants.map((plant) => (
              <div key={plant.id} className="plant-card">
                <h2 className="plant-name">{plant.name}</h2>
                {plant.image && (
                  <a href={plant.image} target="_blank" rel="noopener noreferrer">
                    <img src={plant.image} alt={plant.name} className="plant-image" />
                  </a>
                )}
              </div>
            ))
          ) : (
            <p className="no-plants">No plants found.</p>
          )}
        </div>
      )}
      <h4 className="filter-title">Filter By Plant Type</h4>
      <select onChange={handleFilter} className="filter-form">
        <option value="reset">All Plants</option>
        <option value="Tomato">Tomatoes</option>
        <option value="Pepper">Peppers</option>
        <option value="Herbs">Herbs</option>
      </select>
      <footer className="footer">
        <p className="footer-text">&copy; 2023 Tom Pepper's General Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
