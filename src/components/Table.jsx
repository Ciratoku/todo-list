import "./Table.css";
import Button from "./Button";
import { useState } from "react";

const Table = ({ todos, updateTodo, deleteTodo }) => {
  const [modal, setModal] = useState(false);
  const handleClick = (e) => {
    const [mode, id] = e.target.id.split("_");
    let todo = todos.find((todo) => todo.id == id);
    if (mode == "edit") {
      // open modal window
    } else if (mode == "complete") {
      console.log("tyt");
      todo.completed = true;
      updateTodo(todo);
    } else {
      deleteTodo(id);
    }
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Задача</th>
          <th>Дата выполнения</th>
          <th>Описание</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => {
          return (
            <tr key={todo.id}>
              <td>{todo.name}</td>
              <td>{todo.date}</td>
              <td>{todo.desc}</td>
              <td>
                <Button
                  className="button"
                  id={"edit_" + todo.id}
                  onClick={handleClick}
                >
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
        })}
      </tbody>
    </table>
  );
};

export default Table;
