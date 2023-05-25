import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo.js";
import { v4 as uuid } from "uuid";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const delTodo = (evt) => {
    const todoId = evt.currentTarget.id;
    const newTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(newTodos);
  };

  const renderItems = () => {
    return (
      <div>
        {todos.map((t) => (
          <Todo key={t.id} id={t.id} text={t.todoText} delTodo={delTodo} />
        ))}
      </div>
    );
  };

  const addTodo = (t) => {
    let newTodo = { ...t, id: uuid() };
    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {renderItems()}
    </div>
  );
}

export default TodoList;
