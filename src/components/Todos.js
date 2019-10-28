import React from "react";
import Todo from "./Todo";
const Todos = ({ todos }) => {
  return (
    <ul>
      {todos &&
        todos.map(todo => (
          <Todo key={todo.id} title={todo.title} completed={todo.completed} />
        ))}
    </ul>
  );
};

export default Todos;
