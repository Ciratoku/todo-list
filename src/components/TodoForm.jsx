import React, { useState } from "react";
import Button from "./Button";
import useInput from "../hooks/useInput";
import { v4 as uuidv4 } from "uuid";
const TodoForm = ({ inputs, updateTodos, setModal, btnName }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: inputs.id.value || uuidv4(),
      name: e.target.elements.name.value,
      desc: e.target.elements.desc.value,
      date: e.target.elements.date.value,
      completed: inputs.completed.value,
    };
    updateTodos(todo, btnName == "Добавить" ? "a" : "e");
    setModal(false);
    !inputs.id.value && inputs.name.setValue(""); // means we are not editing => clear headInput
  };
  const inputName = useInput(inputs.name.value);
  const inputDesc = useInput(inputs.desc.value);
  const inputDate = useInput(inputs.date.value);
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Button className="button" onClick={() => setModal(false)}>
        &#10006;
      </Button>
      <div className="form">
        <label htmlFor="name">Название задачи: </label>
        <input type="text" name="name" id="name" {...inputName} required />
      </div>
      <div className="form">
        <label htmlFor="desc">Описание: </label>
        <textarea name="desc" id="desc" rows="10" cols="25" {...inputDesc} />
      </div>
      <div className="form">
        <label htmlFor="date">Дата окончания: </label>
        <input type="date" name="date" id="date" {...inputDate} required />
      </div>
      <Button type="submit" className="button">
        {btnName}
      </Button>
    </form>
  );
};

export default TodoForm;
