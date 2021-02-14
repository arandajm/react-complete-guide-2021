import React from "react";
import "./Card.css";

const Card = ({
  img = "https://www.w3schools.com/w3images/avatar2.png",
  name,
  title,
}) => (
  <div className="card">
    <img src={img} alt="Avatar" />
    <div className="container">
      <h4>
        <b>{name}</b>
      </h4>
      <p>{title}</p>
    </div>
  </div>
);

export default Card;
