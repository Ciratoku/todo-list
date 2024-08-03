import React from "react";
import Button from "./Button";
const Todo = ({ todo, handleClick }) => {
  return (
    <tr style={{ backgroundColor: todo.completed ? "#57BD1B" : "#C7C7C7" }}>
      <td>{todo.name}</td>
      <td>{todo.date}</td>
      <td>{todo.desc}</td>
      <td>
        <Button className="button" id={"edit_" + todo.id} onClick={handleClick}>
          edit
        </Button>
        <Button
          className="button"
          id={"delete_" + todo.id}
          onClick={handleClick}
        >
          delete
        </Button>
        <Button
          className="button"
          id={"complete_" + todo.id}
          onClick={handleClick}
        >
          complete
        </Button>
      </td>
    </tr>
  );
};

export default Todo;
