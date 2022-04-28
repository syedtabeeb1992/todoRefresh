import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { task: "take out trash", id: 1 },
    { task: "feed the cat", id: 2 },
  ]);

  const deleteTodoHandler = (todosId) => {
    console.log(todosId);

    setTodos((pervTodos) => {
      // const updatedTodos = pervTodos.filter((todo) => todo.id !== todosId);
      const updatedTodos = pervTodos.filter((todo) => {
        return todo.id !== todosId;
      });
      return updatedTodos;
    });
  };

  return (
    <div>
      <div className="inputtodo">
        <input type="text" />
      </div>

      <div className="todolist">
        {todos.map((todo) => {
          return (
            <p onClick={(todoItem) => deleteTodoHandler(todo.id)}>
              {todo.task}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default App;
