import React from "react";
import ReactDOM from "react-dom";
import EditForm from "./EditForm";

export const EditModal = (props) => {
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
