import "./Table.css";
import "./sortDiv.css";
import Todo from "./Todo";
import ModalForm from "./ModalForm";
import { useState } from "react";

const Table = ({ todos, setTodos, updateTodos }) => {
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
      updateTodos(todo, "e");
    } else {
      updateTodos(todo, "d");
    }
  };
  const handleRadio = (e) => {
    const mode = e.target.value;
    let tds = JSON.parse(localStorage.getItem("todos"));
    if (mode == "compl") tds = tds.filter((todo) => todo.completed);
    else if (mode == "notcompl") tds = tds.filter((todo) => !todo.completed);
    setTodos(tds);
  };
  return (
    <>
      <div className="sortCompl">
        <p>
          <input name="dzen" type="radio" value="all" onClick={handleRadio} />
          Все
        </p>
        <p>
          <input name="dzen" type="radio" value="compl" onClick={handleRadio} />
          Завершенные
        </p>
        <p>
          <input
            name="dzen"
            type="radio"
            value="notcompl"
            onClick={handleRadio}
          />
          Незавершенные
        </p>
      </div>
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
        updateTodos={updateTodos}
        setModal={setModal}
        btnName="Изменить"
      />
    </>
  );
};

export default Table;
