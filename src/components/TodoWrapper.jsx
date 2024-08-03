import { useEffect, useState } from "react";
import InputHeader from "./InputHeader";
import Table from "./Table";

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    let storedTodos = JSON.parse(localStorage.getItem("todos"));
    let curTodos = [...todos];
    storedTodos.unshift(todo);
    curTodos.unshift(todo);
    setTodos(curTodos);
    localStorage.setItem("todos", JSON.stringify(storedTodos));
  };
  const updateTodo = (todo) => {
    let storedTodos = JSON.parse(localStorage.getItem("todos"));
    let curTodos = [...todos];
    const iStored = storedTodos.findIndex((td) => td.id == todo.id);
    const iCurrent = curTodos.findIndex((td) => td.id == todo.id);
    storedTodos[iStored] = todo;
    curTodos[iCurrent] = todo;
    setTodos(curTodos);
    localStorage.setItem("todos", JSON.stringify(storedTodos));
  };
  const deleteTodo = (id) => {
    let storedTodos = JSON.parse(localStorage.getItem("todos"));
    let curTodos = [...todos];
    const iStored = storedTodos.findIndex((td) => td.id == id);
    const iCurrent = curTodos.findIndex((td) => td.id == id);
    storedTodos.splice(iStored, 1);
    curTodos.splice(iCurrent, 1);
    setTodos(curTodos);
    localStorage.setItem("todos", JSON.stringify(storedTodos));
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    todos?.length && setTodos(todos);
  }, []);
  return (
    <div className="TodoWrapper">
      <h1>to-do list</h1>
      <InputHeader addTodo={addTodo}></InputHeader>
      <Table
        setTodos={setTodos}
        todos={todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      ></Table>
    </div>
  );
}
