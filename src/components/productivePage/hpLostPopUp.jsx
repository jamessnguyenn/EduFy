import React, { useState } from "react";
import "./productivePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

export default function HpLostPopUp({ lostpopUp }) {
  let lost = 5;

  return (
    <div className={lostpopUp ? "lostPopUp show shadow" : "lostPopUp"}>
      <FontAwesomeIcon className="brokenHeartIcon" icon={faHeartBroken} />
      <h4> You have lost {lost} hp </h4>
    </div>
  );
}
