import React from "react";
import Modal from "./Modal";
import TodoForm from "./TodoForm";
const ModalForm = (props) => {
  if (props.modal) {
    return (
      <Modal open={props.modal}>
        <TodoForm {...props} />
      </Modal>
    );
  }
};

export default ModalForm;
