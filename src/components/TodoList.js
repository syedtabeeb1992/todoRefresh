import React, {useContext} from "react";
import TryContext from "../context/tryContext";

const TodoList = (props) => {
  const getIdOnclick = (todoItem) => {
    props.todoItemId(todoItem);
  };


  const  ctx = useContext(TryContext)

  console.log("CCC", ctx)

  return (
    <div className="todolist">

<h1> {ctx.try} </h1>
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
