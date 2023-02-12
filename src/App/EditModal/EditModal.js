import React from "react";
import ReactDOM from "react-dom";
import EditForm from "./EditForm";

export const EditModal = (props) => {
  /*   const { editOpenModal, setEditOpenModal, addTodo, newTodoValue } =
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
  }; */

  const defaultPlaceHolder = "escribe el hueso a agregar";

  return ReactDOM.createPortal(
    <EditForm
      text={props.text}
      setEditModal={props.setEditModal}
      editOpenModal={props.editOpenModal}
      id={props.id}
    />,
    document.getElementById("editModal")
  );
};
