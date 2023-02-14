import React from "react";
import "./TodoItem.css";
import { AiOutlineEdit } from "react-icons/ai";
import { EditModal } from "../App/EditModal/EditModal";
import { TodoContext } from "../App/TodoContext";

function TodoItem(props) {
  const { editOpenModal, setEditOpenModal, editTodo } =
    React.useContext(TodoContext);

  const onClickButton = () => {
    setEditOpenModal(true);
    editTodo(props.id);
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        ✓
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <button className="Icon Icon-edit" onClick={onClickButton}>
        <AiOutlineEdit />
      </button>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
      {editOpenModal && <EditModal id={props.id} text={props.text} />}
    </li>
  );
}

export { TodoItem };
