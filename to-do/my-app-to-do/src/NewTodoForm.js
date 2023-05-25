import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const initialState = {
    todoText: "",
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(formData);
    setFormData(initialState);
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoText">Text</label>
      <input
        id="todoText"
        placeholder="add text"
        name="todoText"
        value={formData.todoText}
        onChange={handleChange}
      />

      <button>Add To Do</button>
    </form>
  );
};

export default NewTodoForm;
