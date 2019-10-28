import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import Todos from "./components/Todos";
import "./app.scss";
const App = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(data => data.json())
      .then(todos => {
        setTodos(todos);
      });
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <h1>Todos</h1>
      <Todos todos={todos} />
    </div>
  );
};
render(<App />, document.getElementById("root"));
