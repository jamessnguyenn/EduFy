import React from "react";
import "./unLoggednavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

import {Link} from'react-router-dom';

const scrollToTop = (e)=>{
  window.scrollTo(0,0);
}

export default function navbar() {
  return (
    <div className="unloggednavBar">
      
      <h1 className="navbar-Title" onClick={scrollToTop}> EduFy </h1>
      <div className="unloggednavEnd">
      <Link to="/login">
       <small className="unloggedNavLink">Login</small>
       </Link>
       <small className="unloggedNavLink">|</small>
       <Link to="/signup">
       <button className="sign-up-button">Sign Up &nbsp;<FontAwesomeIcon icon={faArrowRight}/></button>
       </Link>
      </div>
    </div>
  );
}
