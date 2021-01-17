import React, { useState, useEffect } from "react";
import "./toDoList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ToDoSubmit from "./toDoSubmit.jsx";
import TodoFeed from "./toDoFeed";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);

  const LOCAL_STORAGE_KEY = "react-todo-list-todos";
  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

 const addTodo = (todo)=> {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo._id === id) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  console.log(todos);
  return (
    <div className=" templateBG todoContainer darkShadow ">
      <h3 className="toDoName"> Tasks </h3>

      <ToDoSubmit addTodo={addTodo} />
      <div className="taskButtons">
        <button className="taskButton isActive btnLeft"> All </button>
        <button className="taskButton btnMiddle"> Finish </button>
        <button className="taskButton btnRight"> Unfinshed </button>
      </div>
      {
      <TodoFeed
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      /> }
    </div>
  );
}
