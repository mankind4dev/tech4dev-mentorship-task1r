import React from "react";
import Navbar1 from "./nav1/Navbar1";
import Navbar2 from "./nav2/Navbar2";
import Navbar3 from "./nav3/Navbar3";
import Card from "./cards/Card";
import Cards from "./crad-hover-effect/Cards";
import Hero from "./hero-section/Hero";

export default function Navbar() {
  return (
    <>
      <div className="tasks">
        <Navbar1 />
        <Navbar2 />
        <Navbar3 />
        <Hero />
        <Card />
        <Cards />
      </div>
    </>
  );
}
