import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import "./productivePage.css";
import PomodoroTimer from "./pomoTimer/pomoTimer";
import Motivation from "./motivation/motivation";
import FocusMode from "./focusMode/focusMode";
import ToDoList from "./toDoList/toDoList";
import { useHistory } from "react-router-dom";
import LostPopUp from "../productivePage/hpLostPopUp";
import axios from "axios";

export default function ProductivePage() {
  let [hp, setHP] = useState(0);
  let [coins, setCoins] = useState(0);
  let [lostpopUp, togglePopUp] = useState(true);

  const [profilePicLink, setProfilePicLink] = useState("./loading-image.gif");
  const history = useHistory();
  useEffect(() => {
    axios
      .get(
        `https://edufy-space-api.herokuapp.com/users/${localStorage.getItem(
          "user_id"
        )}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setHP(res.data.health);
        setCoins(res.data.gold);
        setProfilePicLink(res.data.avatar);
      })
      .catch((err) => {
        if (err.response.status == 401 || err.response.status == 403) {
          localStorage.clear();
          history.push("/");
        }
      });
  }, []);

  function subHP(val) {
    setHP((prevHP) => prevHP - val);
    //toDo add subracted value to database
  }
  function addCoins(val) {
    setCoins((prevCoins) => prevCoins + val);
    //toDo show added coins to database
  }

  return (
    <>
      <div className={lostpopUp ? "darkOverLay" : "darkOverLay hide"}> .</div>
      <Navbar hp={hp} coins={coins} profilePicLink={profilePicLink} />

      <div className="productivityPage">
        <LostPopUp lostpopUp={lostpopUp} />
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
