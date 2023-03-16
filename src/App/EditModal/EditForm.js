import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../TodoContext";

const EditForm = () => {
  const { setEditOpenModal, oldTodo, setOldTodo, todos, saveTodos } =
    React.useContext(TodoContext);

  const [newTodo, setNewTodo] = React.useState("");

  const onCancel = () => {
    setEditOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodo({
      completed: false,
      text: event.target.value,
      id: uuidv4(),
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodos = [...todos];
    newTodos.splice(oldTodo, 1, newTodo);
    console.log(oldTodo);
    saveTodos(newTodos);
    setEditOpenModal(false);
  };

  return (
    <div className="ModalBackground">
      <form onSubmit={onSubmit}>
        <label>Editando huesos</label>
        <textarea onChange={onChange} placeholder={oldTodo.text} />

        <div className="TodoForm-buttonContainer">
          <button type="button" onClick={onCancel} className="TodoForm-button">
            cancelar
          </button>
          <button type="submit" className="TodoForm-button TodoForm-button-add">
            Actualizar hueso
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
