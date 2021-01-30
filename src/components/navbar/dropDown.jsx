import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavDropDown() {
  function DropDownItem(props) {
    return <a>{props.children}</a>;
  }
  function logout() {
    localStorage.clear();
  }
  return (
    <div className="navDropDown shadow">
      <DropDownItem>
        <a href="/" onClick={logout}>
          <small className="dropTag">Logout </small>
        </a>
      </DropDownItem>

      <DropDownItem>
        <a href="/profile">
          <small className="dropTag">Profile </small>
        </a>
      </DropDownItem>
    </div>
  );
}

export default NavDropDown;
