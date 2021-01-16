import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import "./productivePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default function ProductivePage() {
  //let [timerMin, setTimerMin] = useState("24");
  const [timerSecs, setTimerSec] = useState("59");

  const startTimer = () => {
    let interval = setInterval(decreaseTimer, 1000);
  };

  function decreaseTimer() {
    setTimerSec(timerSecs - 1);
    // console.log(timerSecs);
  }

  //startTimer();

  return (
    <>
      <Navbar />
      <div className="productivityPage">
        <div className="row">
          <div className="popodoroContainer templateBG ">
            <div className="pomodoroTool">
              <small className="pomoTool"> Pomodoro </small>
              <small className="pomoTool"> Short Break </small>
              <small className="pomoTool"> Long Break </small>
            </div>
            <span className="timer"> 24:59 </span>
            <div className="pomoIcons">
              <FontAwesomeIcon className="playIcon active" icon={faPlay} />
              <FontAwesomeIcon className="pauseIcon" icon={faPause} />
            </div>
          </div>

          <div className="motivationContainer templateBG ">
            <h3> Message for you</h3>
            <p> Don't count the days make the days count</p>
          </div>
        </div>
        <div className="row">
          <div className="todoContainer templateBG ">
            <h3> Task to accomplish</h3>
          </div>
          <div className="focusModeContainer templateBG ">
            <h3> Focus Mode </h3>
          </div>
        </div>
      </div>
    </>
  );
}
