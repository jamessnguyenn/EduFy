import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function navbar() {
  return (
    <div className="navBar">
      <h1> Edufy </h1>

      <div className="navTitle">
        <small className="navLink"> Live Feed </small>
        <small className="navLink"> Store </small>
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
      </div>
    </div>
  );
}
