import React from "react";
import { Family } from "../assets";
import { IoLogoYoutube, IoMdCall } from "react-icons/io";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { integrity } from "../assets/index";
import { glance, ourService, results, services } from ".";
import BestResult from "../components/BestResult";

export default function Retail({ service }) {
  return (
    <>
      <div className="dream">
        <div className="hero">
          <div className="hero-text">
            <span className="">
              Chase Your <br /> Dream with us
            </span>
            <p className="">
              The hearde you work for somthing, the greater you'll feel when you
              achieve it
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
        <span className="">Creating Extraodinary Customer Experience</span>
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
            <img src={integrity} alt="picture" />
            <h2>{service.title}</h2>
            <p>{service.descrpition}</p>
          </div>
        ))}
      </div>
      <div className="business">
        <p className="">business partners</p>
        <div className="logo">
          <img src={integrity} alt="sponsor" />
          <img src={integrity} alt="sponsor" />
          <img src={integrity} alt="sponsor" />
          <img src={integrity} alt="sponsor" />
          <img src={integrity} alt="sponsor" />
          <img src={integrity} alt="sponsor" />
        </div>
      </div>
      <div className="ipdc">
        <img src={integrity} alt="ipdc" />
        <div className="glance">
          <h3>ipdc at a glance</h3>
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
    </>
  );
}
