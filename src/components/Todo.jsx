import React from "react";
import Button from "./Button";
const Todo = ({ todo, handleClick }) => {
  return (
    <tr>
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
