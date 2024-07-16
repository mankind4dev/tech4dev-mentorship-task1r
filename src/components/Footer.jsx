import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube, IoMdCall } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <div className="footers">
        <div className="footer-about">
          <h2>About the company</h2>
          <p>
            Learn to growth and change and you will be a succcess. Microsoft
            patch
          </p>
          <span>
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
          </span>
        </div>

        <div className="footer-product">
          <h2>products</h2>
          <a href="">CSR activitiea</a>
          <a href="">green banking</a>
          <a href="">news</a>
          <a href="">ongoing campgain</a>
          <a href="">updates</a>
        </div>

        <div className="footer-get">
          <h2>get started</h2>
          <p>
            <a href="">Career</a>
            <a href="">contact Us</a>
            <a href="">Government securities</a>
            <a href="">Examples</a>
            <a href="">NIS</a>
          </p>
        </div>
        <div className="footer-ipdc">
          <h2>About</h2>
            <a href="">IPDC at a Glance </a>
            <a href="">Mission, Vision & values</a>
            <a href="">Corperate Government</a>
            <a href="">Shareholder</a>
            <a href="">Investor Relations</a>
        </div>
        <div className="social-media">
          <IoMdCall className="call" />
          +234
        </div>
      </div>
    </>
  );
}
