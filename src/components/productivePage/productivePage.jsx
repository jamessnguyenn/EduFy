import React, { useState, useRef, useEffect } from "react";
import Navbar from "../navbar/navbar";
import "./productivePage.css";
import PomodoroTimer from "./pomoTimer/pomoTimer";
import Motivation from "./motivation/motivation";
import FocusMode from "./focusMode/focusMode";
import focusMode from "./focusMode/focusMode";

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
          <div className="todoContainer templateBG ">
            <h3> Task to accomplish</h3>
          </div>
          <FocusMode />
        </div>
      </div>
    </>
  );
}
