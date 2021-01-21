import React from "react";
import "./unLoggednavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

import {Link} from'react-router-dom';

export default function navbar() {
  return (
    <div className="unloggednavBar">
      <Link to="/">
      <h1 className="navbar-Title"> EduFy </h1>
      </Link>
      <div className="unloggednavEnd">
      <Link to="/login">
       <small className="unloggedNavLink">Login</small>
       </Link>
       <Link to="/signup">
       <button className="sign-up-button">Sign Up <FontAwesomeIcon icon={faArrowRight}/></button>
       </Link>
      </div>
    </div>
  );
}
