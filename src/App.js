import React, {useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App(props) {
  const [todos, setTodos] = useState([
    { task: "take out trash", id: 1 },
    { task: "feed the cat", id: 2 },
  ]);

  const addTodoHandler = (recievedData) => {
    setTodos((prevUsersList) => {
      return [...prevUsersList, { task: recievedData, id: Math.random() }];
    });
  };

  const deleteTodoHandler = (recievedData) => {
    setTodos((pervTodos) => {
      const updatedTodos = pervTodos.filter((todo) => {
        return todo.id !== recievedData;
      });
      return updatedTodos;
    });
  };

  return (
    <div>
      <div className="inputtodo">
        <Input todoItem={addTodoHandler} />
      </div>

      <TodoList todos={todos} todoItemId={deleteTodoHandler} />
    </div>
  );
}

export default App;
