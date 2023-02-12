import React from "react";
import { useState } from "react";
import { TodoContext } from "../TodoContext";

const EditForm = (props) => {
  const { editOpenModal, setEditOpenModal, addTodo, newTodoValue } =
    React.useContext(TodoContext);
  const newId =
    (props.id, props.name, props.EditModal, props.totalTodos, props.saveTodos);

  const [bone, setBone] = useState("");

  const onCancel = () => {
    setEditOpenModal(false);
    console.log(editOpenModal);
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

  const handleClose = (e) => {
    e.preventDefault();
  };
  return (
    <div className="ModalBackground">
      <form onSubmit={onSubmit} onClick={handleClose}>
        <label>Almacen de huesos a estudiar</label>
        <textarea
          value="hola"
          onChange={onChange}
          placeholder="edidanto hueso"
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
    </div>
  );
};

export default EditForm;
