import React, { useState } from "react";

export default function ToDoSubmit({ addTodo }) {
  const [todo, setTodo] = useState({
    _id: "",
    checked: false,
    description: "",
    dueDate: "",
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, description: e.target.value });
  }

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.description.trim()) {
      addTodo({ ...todo, _id: makeid(36) });
      setTodo({ ...todo, description: "" });
    }
  }

  return (
    <>
      <form className="taskForm " onSubmit={handleSubmit}>
        <input
          className="taskInput darkShadow"
          placeholder="Add a task"
          type="text"
          value={todo.description}
          onChange={handleTaskInputChange}
        />

        <input className="taskBTN" input="click" value="+" />
      </form>
      <input value={todo.dueDate} className="dateInput" type="date" />
    </>
  );
}
