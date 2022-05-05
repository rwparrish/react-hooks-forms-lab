import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [formData, setFormData] = useState({
    id: " ",
    name: " ",
    category: " "
  });

  const handleFormChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    setFormData({...formData,
      id: uuid(),
      [name]: value
    })

    console.log(formData);

  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    onItemFormSubmit(formData)
  }

  return (
    <form onSubmit={handleFormSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormChange} value={formData.name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormChange} value={formData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
