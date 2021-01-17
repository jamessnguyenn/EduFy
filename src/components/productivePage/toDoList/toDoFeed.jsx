import React from "react";
import Todo from "./todo";

export default function ToDoFeed({todos, removeTodo, toggleComplete}) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}
