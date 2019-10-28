import React from "react";

const Todo = ({ title, completed }) => {
  return (
    <li>
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {title}
      </span>
    </li>
  );
};

export default Todo;
