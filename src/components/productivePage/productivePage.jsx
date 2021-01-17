import React, { useState, useRef, useEffect } from "react";
import Navbar from "../navbar/navbar";
import "./productivePage.css";
import PomodoroTimer from "./pomoTimer/pomoTimer";
import Motivation from "./motivation/motivation";
import FocusMode from "./focusMode/focusMode";
import ToDoList from "./toDoList/toDoList";

export default function ProductivePage() {
  return (
    <>
      <Navbar />
      <div className="productivityPage">
        <div className="row">
          <PomodoroTimer />
          <Motivation />
        </div>
        <div className="row">
          <ToDoList />
          <FocusMode />
        </div>
      </div>
    </>
  );
}
