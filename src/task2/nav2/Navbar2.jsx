import React from "react";
import "../nav2/navbar2.css"
import { logo1 } from "../../assets";

export default function Navbar2() {
  return (
    <>
      <header>
        <img src={logo1} alt="logo" className="logo2" width={"90px"} height={"60px"}/>
        <nav>
          <ul className="nav_links2">
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
        <a href="#" className="cta2">
          <button>Contact</button>
        </a>
      </header>
    </>
  );
}
