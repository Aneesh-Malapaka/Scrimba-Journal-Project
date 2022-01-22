import React from "react";
import logo from "../Earth.png"

export default function NavBar() {
  return (
      <nav>
          <img src={logo} className="nav--logo" alt="logo" />&nbsp;
          <p className="nav--text">my travel journal</p>
      </nav>
  );
}
