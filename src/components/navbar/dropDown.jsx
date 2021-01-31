import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavDropDown() {
 
  function logout() {
    localStorage.clear();
  }
  return (
    <div className="navDropDown shadow">
        <a href="/profile" className="menu-item">
          <small className="dropTag">Profile </small>
        </a>    
        <a href="/" onClick={logout} className="menu-item">
          <small className="dropTag">Logout </small>
        </a>
      
    </div>
  );
}

export default NavDropDown;
