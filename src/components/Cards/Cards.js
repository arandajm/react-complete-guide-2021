import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ cards = [] }) => {
  const cardsMarkup = cards.map((c) => (
    <Card key={c.id} name={c.name} title={c.title} />
  ));
  return <div className="cards">{cardsMarkup}</div>;
};

export default Cards;
