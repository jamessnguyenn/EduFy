import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import "./pomoTimer.css";
import axios from "axios";
import "../productivePage.css";

export default function PomoTimer({ user, addCoins }) {
  const [isPaused, setIsPaused] = useState(true);
  const [timerSecs, setTimerSec] = useState(1500);
  const [timerMode, setTimerMode] = useState("pomodoro");
  const [counter, setCounter] = useState(0);
  //Converting total time to display
  let minutes = Math.floor(timerSecs / 60);
  let seconds = Math.floor(timerSecs - 60 * minutes);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  let intervalRef = useRef();

  useEffect(() => {
    console.log(counter);
    if (counter > 0) {
      //post user to live feed here
    }
  }, [counter]);

  useEffect(() => {
    if (timerSecs === 0) {
      addCoins(10);
      if (timerMode === "pomodoro") {
        setCounter((prevCounter) => prevCounter + 1);
        setTimerSec(1500);
      } else if (timerMode == "shortBreak") {
        setTimerSec(300);
      } else {
        setTimerSec(600);
      }
      setIsPaused(true);
    }
  }, [timerSecs]);

  useEffect(() => {
    const id = setInterval(() => {
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
    pauseTimer();
    setTimerSec(300);
    setTimerMode("shortBreak");
  }

  function setTimerLong() {
    setTimerSec(600);
    pauseTimer();
    setTimerMode("longBreak");
  }

  function setPomodoro() {
    setTimerSec(1500);
    pauseTimer();
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
