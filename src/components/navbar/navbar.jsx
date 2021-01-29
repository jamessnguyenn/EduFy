import React, { useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DropDown from "./dropDown.jsx";

export default function Navbar({ hp, coins }) {
  const [dropDown, setDrop] = useState(false);
  const logout = () => {
    localStorage.clear();
  };
  return (
    <div className="navBar">
      <Link to="/profile">
        <h1> EduFy </h1>
      </Link>
      <div className="navTitle">
        <Link to="/liveFeed">
          <small className="navLink"> Live Feed </small>
        </Link>
        <Link to="/store">
          <small className="navLink"> Store </small>
        </Link>
      </div>

      <div className="navEnd">
        <div className="progressBars">
          <div className="loadingBars" style={{ width: `${hp}%` }}>
            <FontAwesomeIcon className="heartIcon" icon={faHeart} />
            {`${hp}/100`}
          </div>
        </div>

        <div className="coinsContainer">
          &nbsp; &nbsp; <span className="coinNumber"> {coins} </span>
          <FontAwesomeIcon className="coinIcon" icon={faCoins} />
        </div>
        <div className="profilePicContainer" onClick={() => setDrop(!dropDown)}>
          <img
            src="https://lh3.googleusercontent.com/pw/ACtC-3epGaOLwsQy8jEs3TDBU2gpTBf3pBld_YOEn30o8xo4-eMOiTiwuaHvnMZa4UYP7F-rbbFAYvgxaOqf_PzxbNZFIbzT3tpFv3tV3NZEV6ZgU1J2MrekipxA9a3IKEXxHS5nA3TLocdqFxAIcmQhMoNO=s512-no?authuser=0"
            alt="Profile"
            className="profilePic"
          />
        </div>
        {dropDown && <DropDown />}

        {/*   <a href="/" onClick={logout}>
          <small className="navLink">Logout </small>
        </a> */}
      </div>
    </div>
  );
}
