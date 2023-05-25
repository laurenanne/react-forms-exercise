import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const initialState = {
    width: "",
    height: "",
    backgroundColor: "",
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  };

  const [formData, setFormData] = useState({
    width: "",
    height: "",
    backgroundColor: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width</label>
      <input
        id="width"
        placeholder="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height</label>
      <input
        id="height"
        placeholder="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="backgroundColor">Background Color</label>
      <input
        id="backgroundColor"
        placeholder="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <button>Add</button>
    </form>
  );
};

export default NewBoxForm;
