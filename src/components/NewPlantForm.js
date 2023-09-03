import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  const [addedPlant, setAddedPlant] = useState({
    name: "",
    image: "",
    price: "",
  });
  const { name, image, price } = addedPlant;
  //{...addedPlant, [e.target.name]: e.target.value}

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, image, price: parseFloat(price) }),
    })
      .then(r => r.json())
      .then(newPlant => {
        addPlant(newPlant);
        setAddedPlant({
          name: "",
          image: "",
          price: "",
        });
      });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setAddedPlant({ ...addedPlant, name: e.target.value })}
          placeholder="Plant name"
        />
        <input
          type="text"
          name="image"
          value={image}
          onChange={e =>
            setAddedPlant({ ...addedPlant, image: e.target.value })
          }
          placeholder="Image URL"
        />
        <input
          type="number"
          name="price"
          value={price}
          onChange={e =>
            setAddedPlant({ ...addedPlant, price: e.target.value })
          }
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
