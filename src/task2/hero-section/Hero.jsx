import React from "react";
import "../hero-section/hero.css";
import { logo } from "./image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <header className="header-main">
        <div className="header-main-logo">
          <img src={logo} alt="image logo" width={"90px"} height={"60px"} />
          <nav className="header-main-nav">
            <ul>
              <li>
                <a href=" ">Home</a>
              </li>
              <li>
                <a href=" ">Gallary</a>
              </li>
              <li>
                <a href=" ">About Us</a>
              </li>
              <li>
                <a href=" ">Contact</a>
              </li>
            </ul>
          </nav>
        </div>


        <div className="header-main-sm">
          <a href="">
            <div className="header-main-sm-linkedin">
              <FaFacebookF />
            </div>
          </a>
          <a href="">
            <div className="header-main-sm-facebook">
              <FaLinkedinIn />
            </div>
          </a>
          <a href="">
            <div className="header-main-sm-instagram">
              <FaInstagram />
            </div>
          </a>
        </div>
      </header>


      <main className="main-hero-section">
        <div className="main-intro">
          <h2>
            Welcome <br />
            to my first hero
            <br />
            website practice
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Esse nam quis aliquam veritatis. <br />
            Unde magni veniam odit tempora eaque quaerat!
          </p>
          <a href="#">My work</a>
        </div>
        <div className="main-quotes">
          <p>
            The more that you read, the more <br /> things you will know. The
            more that <br /> you learn, the more places you'll go. <br />
            <br /> Mr. Mankind4dev
          </p>
          <p>
            "For the best return on your <br /> money, pour your purse <br />{" "}
            into your head." <br />
            <br /> Sunday Ogunmakin
          </p>
        </div>
      </main>
    </>
  );
}
