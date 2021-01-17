import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo._id);
  }

  function handleRemoveClick() {
    removeTodo(todo._id);
  }

  return (
    <div className="toDoFeed">
      <div className="task">
        {/* <h4 className="taskName"> {todo.description} </h4> */}
        <div className="circleContainer">
          <div className="circle"></div>
        </div>
        <small className="taskDueDate"> Jan 1st </small>
        <FontAwesomeIcon className="trashIcon" icon={faTrash} />
      </div>
    </div>
  );
}
