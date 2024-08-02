import React from "react";
import "../nav1/navbar1.css";
import { logo1 } from "../../assets";

export default function Navbar1() {
  return (
    <div>
      <header className="header1">
        <img src={logo1} alt="logo" className="logo1" width={"90px"} height={"60px"}/>
        <nav>
          <ul className="nav_links1">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <a href="#" className="cta1">
          <button className="button1">Contact</button>
        </a>
      </header>
    </div>
  );
}
