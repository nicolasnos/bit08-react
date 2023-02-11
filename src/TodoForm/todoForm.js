import React from "react";
import { TodoContext } from "../App/TodoContext";
import "./todoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const [editTodo, setEditTodo] = React.useState("");

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const defaultPlaceHolder = "escribe el hueso a agregar";

  return (
    <form onSubmit={onSubmit}>
      <label>Almacen de huesos a estudiar</label>
      <textarea
        value={newTodoValue || editTodo}
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
  );
}

export { TodoForm };
