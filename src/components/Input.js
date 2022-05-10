import React, {useState } from "react";

const Input = (props) => {
  const [enteredTodo, setEnteredTodo] = useState([]);

  const inputChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  const addTodo = () => {
    setEnteredTodo("");
    props.todoItem(enteredTodo);
  };

  return (
    <div>
      <input type="text" onChange={inputChangeHandler} value={enteredTodo} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Input;
