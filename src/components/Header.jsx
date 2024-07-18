import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="nav">
        <img src={logo} alt="app logo" height={"50px"} width={"50px"} />
        <div className="navs">
          <Link to="/">Retal</Link>
          <Link to="sme">SME</Link>
          <Link to="corporate">Corporate</Link>
          <Link to="aboutUs">About Us</Link>
          <Link to="covid19">Covid-19</Link>
          <Link to="campains">Campains</Link>
        </div>
        <div className="search-service">
          <div className="toggle" onClick={() => setToggle(!toggle)}>
            <FaSearch />
          </div>
          <button className="service">iSERVICE</button>
        </div>
        
      </div>
    </>
  );
}
