import React, { useEffect, useState } from "react";
import "../dropdown/dropdown.css";
import { MenuItems } from "./pages/MenuItem";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
         return (
          <li key={index}>
          <Link
            className={item.cName}
            to={item.path}
            onClick={() => setClick(false)}
          >
            {item.title}
          </Link>
        </li>
         )
        })}
      </ul>
    </>
  );
}
