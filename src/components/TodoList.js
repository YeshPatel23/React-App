import React, { useState } from "react";
import Todo from "./Todo";

export default function TodoList() {
  // const [todo, setTodo] = useState("berlin");
  // const dataChange = (event) => {
  //   setTodo(event.target.value);
  // };
  //   const [val, setVal] = useState();
  const [todos, setTodos] = useState([
    { task: "visit paris" },
    { task: "visit berlin" },
  ]);

  const removeItem = (ItemToRemove) => {
    setTodos(todos.filter((todo) => ItemToRemove !== todo.task));
  };

  const todosData = todos.map((todo) => {
    return <Todo item={todo.task} removeTodo={removeItem} />;
  });

  return (
    <div>
      <h1>React App</h1>
      <ul>{todosData}</ul>
      {/* <ul>
        {todos.map((tasks) => (
          <li>{tasks.task}</li>
        ))}
      </ul> */}
      {/* <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      /> */}

      {/* <input type="text" value={todo} onChange={dataChange} /> */}

      {/* <button onClick={() => setTodo(() => "")}>Reset</button> */}
    </div>
  );
}
