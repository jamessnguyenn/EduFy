import React from "react";
import "./toDoList.css";

export default function toDoList() {
  return (
    <div className=" templateBG todoContainer ">
      <h3 className="toDoName"> Tasks </h3>
      <div className="toDoInputsContainer">
        {/* <input> dw </input>
        <input> </input> */}
      </div>

      <div className="taskButtons">
        <button className="taskButton"> All </button>
        <button className="taskButton"> Finish </button>
        <button className="taskButton"> Unfinshed </button>
      </div>

      <div className="toDoFeed">
        <div className="task">Finish Project</div>
      </div>
    </div>
  );
}
