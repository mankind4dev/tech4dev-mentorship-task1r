import React, { useRef, useState } from "react";
import { Family, threemtt } from "../assets";
import { IoLogoYoutube, IoMdCall } from "react-icons/io";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  logo,
  kutral,
  kview,
  airbnb,
  amazon,
  be,
  facebook,
  google,
  huawei,
  instagram,
  linkedin,
  netflix,
  reachout,
  redeem,
  volkwagon,
} from "../assets/index";
import { glance, ourService, services } from ".";
import BestResult from "../components/BestResult";
import Slider from "../components/Slider";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Retail({ service }) {
  const [logos, setLogos] = useState([]); // Array to store logo elements
  const logosRef = useRef(null); // Ref to the logos container element

  const handleDuplicate = () => {
    const originalLogo = logosRef.current.querySelector(".logos-slide");
    if (originalLogo) {
      const duplicateLogo = originalLogo.cloneNode(true); // Clone the logo element
      setLogos((prevLogos) => [...prevLogos, duplicateLogo]); // Add clone to logos array
    }
  };

  return (
    <>
    <Header />
      <div className="dream">
        <div className="hero">
          <div className="hero-text">
            <span className="">
              Chase Your <br /> Dream with us
            </span>
            <p className="">
              The harder you work for something, the greater you'll feel when
              you achieve it
            </p>
          </div>
          <div className="buttons">
            <button className="btn1">APPLY ONLINE</button>
            <button className="btn2">LOAN CALCULATOR</button>
          </div>
          <div className="media">
            <div className="social-media">
              <IoMdCall className="call" />
              +234
            </div>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <IoLogoYoutube />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
        <figure className="hero-image">
          <img src={Family} alt="family dream" width={"100%"} height={"100%"} />
        </figure>
      </div>
      <div className="creating">
        <span className="">Creating Extraordinary Customer Experience</span>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quasi
          at fugit itaque aperiam qui quisquam. Beatae numquam sint quam
          assumenda libero voluptates exercitationem est adipisci molestias?
          Repellat, ab laudantium!
        </p>
      </div>
      <div className="service">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={logo} alt="picture" />
            <h2>{service.title}</h2>
            <p>{service.descrpition}</p>
          </div>
        ))}
      </div>
      <div className="logos">
        <p className="">Business Partners</p>
        <div ref={logosRef} className="logos-slide">
          <img src={kutral} alt="logo" />
          <img src={threemtt} alt="logo" />
          <img src={kview} alt="logo" />
          <img src={airbnb} alt="logo" />
          <img src={threemtt} alt="logo" />
          <img src={amazon} alt="logo" />
          <img src={be} alt="logo" />
          <img src={threemtt} alt="logo" />
          <img src={threemtt} alt="logo" />
          <img src={facebook} alt="logo" />
          <img src={google} alt="logo" />
          <img src={threemtt} alt="logo" />
          <img src={huawei} alt="logo" />
          <img src={instagram} alt="logo" />
          <img src={threemtt} alt="logo" />
          <img src={netflix} alt="logo" />
          <img src={reachout} alt="logo" />
          <img src={redeem} alt="logo" />
          <img src={volkwagon} alt="logo" />
        </div>
        {/* Render duplicated logos */}
        {logos.map((logo, index) => (
          <div key={index} className="logos-slide">
            {/* Content of the duplicated logo element */}
          </div>
        ))}
        <button onClick={handleDuplicate}>Duplicate Logo</button>
      </div>

      <div className="ipdc">
        <img src={logo} alt="ipdc" />
        <div className="glance">
          <h3>IPDC at a Glance</h3>
          <p>{glance.title}</p>
          <span>
            {glance.btn}
            <FaArrowRight />
          </span>
        </div>
      </div>
      <div className="ourService">
        <h2>Our Service</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia
          fuga consequuntur soluta repudiandae? Optio ratione dolores pariatur
          vel sint!
        </p>
        <div className="serviceImage">
          {ourService.map((ipdc, index) => (
            <figure key={index}>
              <img src={ipdc.img} alt="" />
              <figcaption>
                {ipdc.title}
                <span>
                  <FaArrowRight />
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <BestResult />
      <Footer />
    </>
  );
}
