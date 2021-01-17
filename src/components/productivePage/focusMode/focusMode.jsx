import React, { useState, useEffect } from "react";
import "../focusMode/focusMode.css";
import CodingSVG from "../../img/coding.svg";

export default function FocusMode() {
  const [isFocusMode, setFocusMode] = useState(false);
  const [userOnBrowser, setUserOnBrowser] = useState(true);
  const handleClick = () => setFocusMode(!isFocusMode);

  if (isFocusMode && !userOnBrowser) {
    alert("Stop switching tabs");
  }

  // Got this check method to check for if user switched tab from:
  // https://stackoverflow.com/questions/49902883/check-if-the-browser-tab-is-in-focus-in-reactjs

  // User has switched back to the tab
  const onFocus = () => {
    console.log(123);
    setUserOnBrowser(true);
  };

  // User has switched away from the tab (AKA tab is hidden)
  const onBlur = () => {
    setUserOnBrowser(false);
  };

  useEffect(() => {
    setInterval(() => {
      window.addEventListener("focus", onFocus);
      window.addEventListener("blur", onBlur);
      // Specify how to clean up after this effect:
      return () => {
        window.removeEventListener("focus", onFocus);
        window.removeEventListener("blur", onBlur);
      };
    }, 2000);
  }, []);

  return (
    <div className="templateBG focusModeContainer">
      <h2 className="focusTitle"> Focus Mode </h2>
      <input
        type="checkbox"
        class="toggle-switch-checkbox"
        name="toggleSwitch"
        id="toggleSwitch"
        onClick={handleClick}
      />
      <label class="toggle-switch-label" for="toggleSwitch"></label>
      <img src={CodingSVG} className="codingSVG" alt="coding" />
    </div>
  );
}
