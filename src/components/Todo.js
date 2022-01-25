import React from "react";

export default function Todo(props) {
  const remove = () => {
    props.removeTodo(props.item);
  };
  return (
    <div>
      <li>{props.item}</li>
      <button>edit</button>
      <button onClick={remove}>X</button>

      {/* <button onClick={() => props.removeTodo(props.item)}>X</button> */}
    </div>
  );
}
