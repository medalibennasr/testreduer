import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList({ doneTodos }) {
  let todos = useSelector((data) => data);
  return (
    <div>
      {doneTodos === "all"
        ? todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : doneTodos === "true"
        ? todos
            .filter((todo) => todo.done === true)
            .map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : doneTodos === "false"
        ? todos
            .filter((todo) => todo.done === false)
            .map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : null}
    </div>
  );
}

export default TodoList;
