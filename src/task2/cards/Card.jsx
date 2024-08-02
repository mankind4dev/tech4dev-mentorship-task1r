import React from "react";
import "../cards/card.css";
import { bg1, bg2, bg3, bg4, bg5, bg6 } from "./img";

export default function Card() {
  return (
    <>
      <div className="head">
        <h2>Creating responsive CSS cards</h2>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={bg1} alt="logo" />
          <div className="card-content">
            <h3>Card 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quaerat eos, illo quibusdam impedit accusantium
              pariatur eaque non atque optio?
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <img src={bg2} alt="logo" />
          <div className="card-content">
            <h3>Card 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quaerat eos, illo quibusdam impedit accusantium
              pariatur eaque non atque optio?
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <img src={bg3} alt="logo" />
          <div className="card-content">
            <h3>Card 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quaerat eos, illo quibusdam impedit accusantium
              pariatur eaque non atque optio?
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <img src={bg4} alt="logo" />
          <div className="card-content">
            <h3>Card 4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quaerat eos, illo quibusdam impedit accusantium
              pariatur eaque non atque optio?
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <img src={bg5} alt="logo" />
          <div className="card-content">
            <h3>Card 5</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quaerat eos, illo quibusdam impedit accusantium
              pariatur eaque non atque optio?
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
        <div className="card">
          <img src={bg6} alt="logo" />
          <div className="card-content">
            <h3>Card 6</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quaerat eos, illo quibusdam impedit accusantium
              pariatur eaque non atque optio?
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
