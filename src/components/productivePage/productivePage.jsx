import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import "./productivePage.css";
import PomodoroTimer from "./pomoTimer/pomoTimer";
import Motivation from "./motivation/motivation";
import FocusMode from "./focusMode/focusMode";
import ToDoList from "./toDoList/toDoList";

export default function ProductivePage() {
  let [hp, setHP] = useState(50);
  let [coins, setCoins] = useState(50);

  function addHP(val) {
    setHP((hp = hp + val));
  }
  function subHP(val) {
    setHP((hp = hp - val));     
  }
  function addCoins(val) {
    setCoins((coins = coins + val));
  }
  function subCoins(val) {
    setCoins((coins = coins - val));
  }

  return (
    <>
      <Navbar hp={hp} coins={coins} />
      <div className="productivityPage">
        <div className="row">
          <PomodoroTimer addCoins={addCoins} />
          <Motivation />
        </div>
        <div className="row">
          <ToDoList addCoins={addCoins} />
          <FocusMode subHP={subHP} />
        </div>
      </div>
    </>
  );
}


