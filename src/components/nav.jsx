import React from "react";
import { Link } from "react-router-dom";
import nav_logo from "../assets/Logo.png";
import nav_wave from "../assets/Nav-Wave.png";
import nav_circle from "../assets/Logo Circle.png";

const Nav = () => {
  return (
    <div className="nav">
      <img className="nav_wave" src={nav_wave} alt="" />
      <div className="nav_logo-wrapper">
        <img className="nav_logo" src={nav_logo} alt="" />
        <img className="nav_circle" src={nav_circle} alt="" />
      </div>
      <ul className="nav_links">
        <li>
          <Link to="/" className="nav_link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="nav_link">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="nav_link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/" className="nav_link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
