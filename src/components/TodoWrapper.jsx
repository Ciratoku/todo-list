import { useEffect, useState } from "react";
import InputHeader from "./InputHeader";
import Table from "./Table";

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const updateTodos = (todo, mode) => {
    let storedTodos = JSON.parse(localStorage.getItem("todos"));
    let curTodos = [...todos];
    if (mode == "a") {
      storedTodos.unshift(todo);
      curTodos.unshift(todo);
    } else {
      const iStored = storedTodos.findIndex((td) => td.id == todo.id);
      const iCurrent = curTodos.findIndex((td) => td.id == todo.id);
      if (mode == "e") {
        storedTodos[iStored] = todo;
        curTodos[iCurrent] = todo;
      } else {
        // d
        storedTodos.splice(iStored, 1);
        curTodos.splice(iCurrent, 1);
      }
    }
    setTodos(curTodos);
    localStorage.setItem("todos", JSON.stringify(storedTodos));
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) setTodos(todos);
    else {
      localStorage.setItem("todos", JSON.stringify([]));
      setTodos([]);
    }
  }, []);
  return (
    <div className="TodoWrapper">
      <h1>to-do list</h1>
      <InputHeader addTodo={updateTodos}></InputHeader>
      <Table
        setTodos={setTodos}
        todos={todos}
        updateTodos={updateTodos}
      ></Table>
    </div>
  );
}
