import React, { useState, useEffect } from "react";
import "./toDoList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ToDoSubmit from "./toDoSubmit.jsx";
import TodoFeed from "./toDoFeed";

export default function ToDoList({ addCoins }) {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

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

  const addTodo = (todo) => {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  };

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo._id !== id));
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
        addCoins(20);
        return todo;
      })
    );
  }

  //Change the filter state
  function changeFilter(filter) {
    setFilter(filter);
  }

  console.log(todos);
  return (
    <div className=" templateBG todoContainer darkShadow ">
      <h3 className="toDoName"> Tasks </h3>
      <div className="toDoInputsContainer">
        <ToDoSubmit addTodo={addTodo} />
      </div>

      <div className="taskButtons">
        <button
          className={filter === "all" ? "taskButton isActive" : " taskButton"}
          onClick={() => changeFilter("all")}
        >
          {" "}
          All{" "}
        </button>
        <button
          className={
            filter === "active" ? "taskButton isActive" : " taskButton"
          }
          onClick={() => changeFilter("active")}
        >
          {" "}
          Finish{" "}
        </button>
        <button
          className={
            filter === "complete" ? "taskButton isActive" : " taskButton"
          }
          onClick={() => changeFilter("complete")}
        >
          {" "}
          Unfinshed{" "}
        </button>
      </div>

      <div className="toDoFeed">
        <TodoFeed
          todos={todos}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          filter={filter}
        />
      </div>
    </div>
  );
}
