import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function NewTodoForm(props) {
  const [item, setItem] = useState({ task: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createTodo({ ...item, id: uuid() });
    setItem({ task: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newtodo">New-Todo</label>
        <input
          type="text"
          placeholder="newtodo"
          name="task"
          value={item.task}
          onChange={(e) => setItem({ task: e.target.value })}
        />
        <button>add-todo</button>
      </form>
    </div>
  );
}
