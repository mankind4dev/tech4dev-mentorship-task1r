import React from "react";
import "../nav3/navbar3.css"
import { logo1 } from "../../assets";

export default function () {
  return (
    <>
      <header className="header3">
        <img src={logo1} alt="logo" className="logo3" width={"90px"} height={"60px"}/>
        <nav className="nav3">
          <ul className="nav_links3">
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
        <a href="#" className="cta3">
          <button className="button3">Contact</button>
        </a>
      </header>
    </>
  );
}
