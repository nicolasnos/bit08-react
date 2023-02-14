import React from "react";
import { TodoContext } from "../App/TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <>
      <h2>
        Bienvenido, por favor has click en el icono + para agregar el hueso que
        quieres estudiar
      </h2>
      <h2 className="TodoCounter">
        Has estudiado {completedTodos} de {totalTodos} huesos
      </h2>
    </>
  );
}

export { TodoCounter };
