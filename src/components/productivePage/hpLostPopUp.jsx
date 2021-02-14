import React, { useState } from "react";
import "./productivePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

export default function HpLostPopUp({setLostPopUp}) {
  return (
    <div className= "lostPopUp show shadow">
      <FontAwesomeIcon className="brokenHeartIcon" icon={faHeartBroken} />
      <h4> You have lost all your health. Your profile will now reset.</h4>
    </div>
  );
}
