import React, { useState } from "react";

function PlantCard({ plant }) {
  const { id, name, image, price } = plant;
  const [inStock, setInStock] = useState(true);
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={event => setInStock(false)}>
          In Stock
        </button>
      ) : (
        <button onClick={event => setInStock(true)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
