import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import "./productivePage.css";
import PomodoroTimer from "./pomoTimer/pomoTimer";
import Motivation from "./motivation/motivation";
import FocusMode from "./focusMode/focusMode";
import ToDoList from "./toDoList/toDoList";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function ProductivePage() {
  let [hp, setHP] = useState(0);
  let [coins, setCoins] = useState(0);
  const [health, setHealth] = useState(0);
  const history = useHistory();
  useEffect(() => {
      axios.get(`https://edufy-api.herokuapp.com/users/${localStorage.getItem('user_id')}`, {
          headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
      })
          .then(res => {
              setHP(res.data.health);
              setCoins(res.data.gold);
              
          })
          .catch(err => {
              if (err.response.status == 401 || err.response.status == 403) {
                  history.push('/');
              }
          })

  }, [])


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
