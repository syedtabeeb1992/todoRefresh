import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { task: "take out trash", id: 1 },
    { task: "feed the cat", id: 2 },
  ]);
  const [enteredTodo, setEnteredTodo] = useState([]);

  const inputChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  const deleteTodoHandler = (todosId) => {
    // console.log(todosId);
    setTodos((pervTodos) => {
      const updatedTodos = pervTodos.filter((todo) => {
        return todo.id !== todosId;
      });
      return updatedTodos;
    });
  };

  const addTodoHandler = () => {
    setEnteredTodo("");
    setTodos((prevUsersList) => {
      return [...prevUsersList, { task: enteredTodo, id: Math.random() }];
    });
  };

  return (
    <div>
      <div className="inputtodo">
        <input type="text" onChange={inputChangeHandler} value={enteredTodo} />
      </div>
      <button onClick={addTodoHandler}>Add</button>
      <div className="todolist">
        {todos.map((todo) => {
          return (
            <p key={todo.id} onClick={(todoItem) => deleteTodoHandler(todo.id)}>
              {todo.task}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default App;
