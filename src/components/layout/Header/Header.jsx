import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import Points from "../../pages/points/Points.jsx";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <h1>Tasks</h1>
          <div className="header--nav">
            <NavLink to={"/"}>Tasks</NavLink>
            <NavLink to={"/done"}>Done</NavLink>
            <NavLink to={"/admin"}>Admin</NavLink>
            <Points />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
