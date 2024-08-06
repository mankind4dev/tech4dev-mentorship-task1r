import React, { useState } from "react";
import "../dropdown/navbar.css";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "./Dropdown";
import Button from "./Button";
import { logo1 } from "../assets";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo1} alt="logo" width={"90px"} height={"60px"} />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <IoClose /> : <TiThMenu />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item nav-links"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={closeMobileMenu}
          >
            Services
            <IoIosArrowDown />
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/contactUs"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signUp"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </div>
  );
}
