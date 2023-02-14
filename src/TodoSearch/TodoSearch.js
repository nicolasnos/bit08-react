import React from "react";
import { TodoContext } from "../App/TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <input
      onChange={onSearchValueChange}
      value={searchValue}
      className="TodoSearch"
      placeholder="filtra los huesos"
    />
  );
}

export { TodoSearch };
