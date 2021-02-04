import React from "react";
import Todo from "./todo";
import "./toDoList.css";

export default function ToDoFeed({
  todos,
  removeTodo,
  toggleComplete,
  filter,
}) {
  let todosFilter = [];

  if (filter === "all") {
    //console.log(filter);
    todosFilter = todos;
  } else if (filter === "active") {
    todosFilter = todos.filter((todo) => todo.checked);
  } else if (filter === "complete") {
    todosFilter = todos.filter((todo) => !todo.checked);
  } else if (filter === "Overdue") {
    todosFilter = todos.filter((todo) => todo.overdue);
  }

  return (
    <>
      {todosFilter.map((todo) => (
        <Todo
          key={todo._id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </>
  );
}
