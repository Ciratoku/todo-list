import { useEffect, useState } from "react";
import InputHeader from "./InputHeader";
import Table from "./Table";

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  const updateTodo = (todo) => {
    let newTodos = [...todos];
    const i = newTodos.findIndex((td) => td.id == todo.id);
    newTodos[i] = todo;
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  const deleteTodo = (id) => {
    let newTodos = [...todos];
    const i = newTodos.findIndex((todo) => todo.id == id);
    newTodos.splice(i, 1);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
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
        todos={todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      ></Table>
    </div>
  );
}
