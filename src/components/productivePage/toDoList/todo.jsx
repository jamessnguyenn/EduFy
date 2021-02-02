import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./toDoList.css";

export default function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo._id);
  }

  function handleRemoveClick() {
    removeTodo(todo._id);
  }

  return (
    <div className={!todo.Overdue ? "task" : "task taskLate"}>
      {<h4 className="taskName"> {todo.description} </h4>}
      <div className="circleContainer">
        <div
          className={todo.checked ? "circle checked" : "circle"}
          onClick={handleCheckboxClick}
        >
          {todo.checked ? (
            <FontAwesomeIcon className="checkIcon" icon={faCheck} />
          ) : (
            ""
          )}
        </div>
      </div>
      <small
        className={!todo.Overdue ? "taskDueDate" : "taskDueDate pastDueDate"}
      >
        {" "}
        {todo.Overdue ? "LATE: " : ""} {todo.dueDate}{" "}
      </small>
      <FontAwesomeIcon
        className="trashIcon"
        onClick={handleRemoveClick}
        icon={faTrash}
      />
    </div>
  );
}
