import React, { useState } from "react";

export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [todo, setTodo] = useState(props.item);

  const remove = () => {
    props.removeTodo(props.id);
  };

  const toggleForm = () => {
    setEditing(!isEditing);
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    props.updateData(props.id, todo);
    setEditing(false);
  };

  let result;
  if (isEditing) {
    result = (
      <div>
        <form onSubmit={handleUpdate}>
          <input type="text" value={todo} onChange={handleChange} />
          <button>save-todo</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div>
        <div>
          <li>{props.item}</li>
          <button onClick={toggleForm}>edit</button>
          <button onClick={remove}>X</button>
        </div>
      </div>
    );
  }

  return result;

  // return (
  //   <div>
  //     <li>{props.item}</li>
  //     <button>edit</button>
  //     <button onClick={remove}>X</button>

  //     {/* <button onClick={() => props.removeTodo(props.item)}>X</button> */}
  //   </div>
  // );
}
