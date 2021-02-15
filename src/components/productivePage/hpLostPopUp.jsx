import React, { useState } from "react";
import "./productivePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";

export default function HpLostPopUp({ setLostPopUp }) {
 
  const closePopUp= ()=>{
    setLostPopUp(false);
  }
  return (
    <div className="lostPopUp show shadow">
      <div className="lostPopUp-header">
      <FontAwesomeIcon className="brokenHeartIcon" icon={faHeartBroken} />
      <h4> Looks like you ran out of health. <br/> Your profile will now reset.</h4>
      </div>
      <input type="button" value="Close" className="close-button" onClick={closePopUp}/>
    </div>
  );
}
