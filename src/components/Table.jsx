import "./Table.css";
import "./sortDiv.css";
import Todo from "./Todo";
import ModalForm from "./ModalForm";
import { useState } from "react";

const Table = ({ todos, setTodos, updateTodos }) => {
  const [radio, setRadio] = useState("all");
  const [sort, setSort] = useState("def");
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
    setRadio(mode);
    setTodos(tds);
  };
  const handleSort = (e) => {
    const mode = e.target.value;
    setSort(mode);
    let sortedTodos = [...todos];
    mode == "asc"
      ? sortedTodos.sort((a, b) => new Date(a.date) - new Date(b.date))
      : sortedTodos.sort((a, b) => -(new Date(a.date) - new Date(b.date)));
    setTodos(sortedTodos);
  };
  return (
    <>
      <div className="sortCompl">
        <p>
          <input
            name="all"
            type="radio"
            value="all"
            checked={radio == "all" ? true : false}
            onClick={handleRadio}
          />
          Все
        </p>
        <p>
          <input
            name="compl"
            type="radio"
            value="compl"
            checked={radio == "compl" ? true : false}
            onClick={handleRadio}
          />
          Завершенные
        </p>
        <p>
          <input
            name="notcompl"
            type="radio"
            value="notcompl"
            checked={radio == "notcompl" ? true : false}
            onClick={handleRadio}
          />
          Незавершенные
        </p>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Задача</th>
            <th>
              Дата выполнения
              <select className="control" value={sort} onChange={handleSort}>
                <option value="def">без сорт.</option>
                <option value="desc">по убыв.</option>
                <option value="asc">по возраст.</option>
              </select>
            </th>
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
