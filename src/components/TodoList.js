import React from "react";

const TodoList = (props) => {

  const getIdOnclick = (todoItem) => {
    props.todoItemId(todoItem);
  };

  return (
    <div className="todolist">
      {props.todos.map((todo) => {
        return (
          <p key={todo.id} onClick={(todoItem) => getIdOnclick(todo.id)}>
            {todo.task}
          </p>
        );
      })}
    </div>
  );
};

export default TodoList;
