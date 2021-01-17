import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import "./pomoTimer.css";
import "../productivePage.css";

export default function PomoTimer() {
  //let [timerMin, setTimerMin] = useState("24");
  const [isPaused, setIsPaused] = useState(true);
  const [timerSecs, setTimerSec] = useState("1500");
  const [timerMode, setTimerMode] = useState("pomodoro");
  let counter = 0;
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
        if (timerMode === "pomodoro") {
          counter++;
        }
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

  function setTimerShort() {
    setTimerSec(300);
    setTimerMode("shortBreak");
  }

  function setTimerLong() {
    setTimerSec(600);
    setTimerMode("longBreak");
  }

  function setPomodoro() {
    setTimerSec(1500);
    setTimerMode("pomodoro");
  }

  return (
    <div className=" templateBG popodoroContainer shadow  ">
      <div className="pomodoroTool">
        <small
          onClick={setPomodoro}
          className={timerMode === "pomodoro" ? "pomoTool active" : "pomoTool"}
        >
          {" "}
          Pomodoro{" "}
        </small>
        <small
          className={
            timerMode === "shortBreak" ? "pomoTool active" : "pomoTool"
          }
          onClick={setTimerShort}
        >
          {" "}
          Short Break{" "}
        </small>
        <small
          className={timerMode === "longBreak" ? "pomoTool active" : "pomoTool"}
          onClick={setTimerLong}
        >
          {" "}
          Long Break{" "}
        </small>
      </div>
      <span className="timer">
        {minutes}:{seconds}
      </span>
      <div className="pomoIcons">
        <FontAwesomeIcon
          className={isPaused ? "pauseIcon" : "pauseIcon active"}
          onClick={startTimer}
          icon={faPlay}
        />
        <FontAwesomeIcon
          className={isPaused ? "playIcon active" : "playIcon "}
          onClick={pauseTimer}
          icon={faPause}
        />
      </div>
    </div>
  );
}
