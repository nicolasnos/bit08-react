import React from "react";
import "./TodoItem.css";
import { AiOutlineEdit } from "react-icons/ai";
import { EditModal } from "../App/EditModal/EditModal";
import { TodoContext } from "../App/TodoContext";

function TodoItem(props) {
  const { editOpenModal, setEditOpenModal } = React.useContext(TodoContext);
  const openEditModal = () => {
    setEditOpenModal(!editOpenModal);
    console.log(editOpenModal);
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
      <button className="Icon Icon-edit" onClick={props.onEdit}>
        {editOpenModal && (
          <EditModal
            text={props.text}
            setEditModal={props.setEditModal}
            editOpenModal={props.editOpenModal}
            id={props.id}
          />
        )}
        <AiOutlineEdit />
      </button>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
