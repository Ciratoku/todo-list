import Button from "./Button";
import ModalForm from "./ModalForm";
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
      <ModalForm
        modal={modal}
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
    </div>
  );
};

export default InputHeader;
