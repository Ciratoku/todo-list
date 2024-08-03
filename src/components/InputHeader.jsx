import useInput from "../hooks/useInput";
import Button from "./Button";
import Modal from "./Modal";
import TodoForm from "./TodoForm";
import { useState } from "react";
const InputHeader = ({ addTodo }) => {
  const [inputName, setInputName] = useState("");
  const [modal, setModal] = useState(false);
  return (
    <div>
      <input
        className="todo-input"
        placeholder="введите название задачи..."
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      ></input>
      <Button className="todo-btn" onClick={() => setModal(true)}>
        добавить
      </Button>
      {modal && (
        <Modal open={modal}>
          <TodoForm
            inputs={{
              name: { value: inputName, setValue: setInputName },
              desc: { value: "" },
              date: { value: "" },
              completed: { value: false },
            }}
            updateTodos={addTodo}
            setModal={setModal}
            btnName="Добавить"
          />
        </Modal>
      )}
    </div>
  );
};

export default InputHeader;
