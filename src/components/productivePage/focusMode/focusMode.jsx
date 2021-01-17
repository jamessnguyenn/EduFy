import React, { useState, useEffect } from "react";
import "../focusMode/focusMode.css";
import CodingSVG from "../../img/coding.svg";
import Switch from "react-switch";
import axios from 'axios';

export default function FocusMode({user}) {
  const [isFocusMode, setFocusMode] = useState(false);
  const [userOnBrowser, setUserOnBrowser] = useState(true);
  const [checked, setChecked] = useState(false);

  const handleChange = (on) =>{ 
    setFocusMode(on);
    setChecked(on);
  };
  if (isFocusMode && !userOnBrowser) {
   
  }

  // Got this check method to check for if user switched tab from:
  // https://stackoverflow.com/questions/49902883/check-if-the-browser-tab-is-in-focus-in-reactjs

  // User has switched back to the tab
  const onFocus = () => {
    setUserOnBrowser(true);
  };

  // User has switched away from the tab (AKA tab is hidden)
  const onBlur = () => {
    setUserOnBrowser(false);
  };

  useEffect(() =>{
    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
  },[])

  useEffect(()=>{
    if(isFocusMode && !userOnBrowser){
      alert("Please stay on the browser and continue studying! You've lost 10 health.");
      document.title = "Come back!";
      var newHealth = user.health -10;
      const health ={
        health: newHealth
      }
    /**   axios.put(`https://edufy-api.herokuapp.com/${user._id}/health`, health, {
        headers:{
          'Authorization': 'Bearers ' + localStorage.getItem('token')
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      })**/
    }else{
    document.title ="Your Profile";
    }
  },[isFocusMode, userOnBrowser])
  

  return (
    <div className="templateBG focusModeContainer shadow">
      <h2 className="focusTitle"> Focus Mode </h2>
      <Switch
        onChange={handleChange}
        checked={checked}
        onColor='#437fc7'
      />
      <label class="toggle-switch-label" for="toggleSwitch"></label>
      <img src={CodingSVG} className="codingSVG" alt="coding" />
    </div>
  );
}
