import React from "react";

function Todo(props) {
  return (
    <div>
      <div className="Todo">{props.text}</div>
      <div id={props.id} onClick={props.delTodo}>
        <button>X</button>
      </div>
    </div>
  );
}

export default Todo;
