import React, { useState, useRef, useEffect } from "react";
import Navbar from "../navbar/navbar";
import "./productivePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default function ProductivePage() {
  //let [timerMin, setTimerMin] = useState("24");
  const [isPaused, setIsPaused] = useState(false);
  const [timerSecs, setTimerSec] = useState("20");

  //Converting total time to display
  let minutes = Math.floor(timerSecs / 60);
  let seconds = Math.floor(timerSecs - 60 * minutes);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  let intervalRef = useRef();

  useEffect(() => {
    const id = setInterval(() => {
      if (timerSecs === 1) {
        setIsPaused(true);
      }
      {
        isPaused
          ? clearInterval(intervalRef.current)
          : setTimerSec(timerSecs - 1);
      }
    }, 1000);
    intervalRef.current = id;
    return () => clearInterval(intervalRef.current);
  });

  function pauseTimer() {
    setIsPaused(true);
  }

  function startTimer() {
    setIsPaused(false);
  }

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
            <span className="timer">
              {minutes}:{seconds}
            </span>
            <div className="pomoIcons">
              <FontAwesomeIcon onClick={startTimer} icon={faPlay} />
              <FontAwesomeIcon
                className="pauseIcon"
                onClick={pauseTimer}
                icon={faPause}
              />
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
