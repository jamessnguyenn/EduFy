import React from "react";
import Todo from "./todo";
import "./toDoList.css";

export default function ToDoFeed({ todos, removeTodo, toggleComplete }) {
  return (
    <>
      {todos.map((todo) => (
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
