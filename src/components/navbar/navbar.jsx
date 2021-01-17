import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function navbar() {

  const logout = ()=>{
    localStorage.clear();
  }
  return (
    <div className="navBar">
      <Link to="/profile">
      <h1> Edufy </h1>
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
          <div className="loadingBars">
            <FontAwesomeIcon className="heartIcon" icon={faHeart} />
            20/100
          </div>
        </div>

        <div className="coinsContainer">
          <FontAwesomeIcon className="coinIcon" icon={faCoins} />
          1020
        </div>
        <a href = '/' onClick={logout}>
        <small className="navLink">Logout </small>
        </a>
      </div>
    </div>
  );
}
