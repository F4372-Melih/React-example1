import { useState } from "react";
import "./Cards.css";

const Cards = ({ name, image, desc }) => {
  return (
    <div className="card">
      <img src={image} alt="img" className="cardimg" />
      <h3 className="name">{name}</h3>
      <p className="desc">{desc}</p>
      <button className="button" onClick={() => <a href="#"></a>}>
        Detail
      </button>
    </div>
  );
};

export default Cards;
