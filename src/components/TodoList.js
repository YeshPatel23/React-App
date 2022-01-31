import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

export default function TodoList() {
  // const [todo, setTodo] = useState("berlin");
  // const dataChange = (event) => {
  //   setTodo(event.target.value);
  // };
  //   const [val, setVal] = useState();
  const [todos, setTodos] = useState([]);

  const createItem = (newTodo) => {
    setTodos(todos.concat(newTodo));
  };

  const removeItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todosData = todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        item={todo.task}
        removeTodo={removeItem}
      />
    );
  });

  return (
    <div>
      <h1>React App</h1>
      <NewTodoForm createTodo={createItem} />
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
