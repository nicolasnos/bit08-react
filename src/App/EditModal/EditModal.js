import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { TodoContext } from "../TodoContext";

export const EditModal = (props) => {
  const { editOpenModal, setEditOpenModal, addTodo, newTodoValue } =
    React.useContext(TodoContext);
  const newId =
    (props.id, props.name, props.EditModal, props.totalTodos, props.saveTodos);

  const [bone, setBone] = useState("");

  const onCancel = () => {
    setEditOpenModal(false);
  };

  const onChange = (event) => {
    event.preventDefault();
    setBone(event.target.value);
    console.log(bone);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setEditOpenModal(false);
  };

  const defaultPlaceHolder = "escribe el hueso a agregar";

  return ReactDOM.createPortal(
    <div className="ModalBackground">
      <form onSubmit={onSubmit}>
        <label>Almacen de huesos a estudiar</label>
        <textarea
          value="hola"
          onChange={onChange}
          placeholder={defaultPlaceHolder}
        />

        <div className="TodoForm-buttonContainer">
          <button type="button" onClick={onCancel} className="TodoForm-button">
            cancelar
          </button>
          <button type="submit" className="TodoForm-button TodoForm-button-add">
            Agregar hueso
          </button>
        </div>
      </form>
    </div>,
    document.getElementById("editModal")
  );
};
