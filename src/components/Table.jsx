import "./Table.css";
import Button from "./Button";
import Todo from "./Todo";
import ModalForm from "./ModalForm";
import { useState } from "react";

const Table = ({ todos, updateTodo, deleteTodo }) => {
  const [modal, setModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const handleClick = (e) => {
    const [mode, id] = e.target.id.split("_");
    let todo = todos.find((todo) => todo.id == id);
    if (mode == "edit") {
      setCurrentTodo(todo);
      setModal(true);
    } else if (mode == "complete") {
      todo.completed = !todo.completed;
      updateTodo(todo);
    } else {
      deleteTodo(id);
    }
  };
  return todos.length ? (
    <>
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
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} handleClick={handleClick} />
          ))}
        </tbody>
      </table>
      <ModalForm
        modal={modal}
        inputs={{
          id: { value: currentTodo.id },
          name: { value: currentTodo.name },
          desc: { value: currentTodo.desc },
          date: { value: currentTodo.date },
          completed: { value: currentTodo.completed },
        }}
        updateTodos={updateTodo}
        setModal={setModal}
        btnName="Изменить"
      />
    </>
  ) : null;
};

export default Table;
