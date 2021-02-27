import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";

const App = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Alene Hoppe",
      title: "Direct Usability Designer",
    },
    {
      id: 3,
      name: "Alexander Kshlerin",
      title: "Corporate Group Producer",
    },
    {
      id: 6,
      name: "Cristian Stroman",
      title: "Dynamic Metrics Liaison",
    },
    {
      id: 10,
      name: "Solon Bartell",
      title: "Sortware Developer",
    },
  ]);
  const [showCards, setShowCards] = useState(true);
  const toggleCardsHandler = () => setShowCards(!showCards);
  const deleteCardHandler = (cardIndex) => {
    const cardsCopy = [...cards];
    console.log(cardIndex);
    cardsCopy.splice(
      cardsCopy.findIndex((c) => c.id === cardIndex),
      1
    );
    setCards(cardsCopy);
  };
  const changeNameHandler = (ev, index) => {
    const cardIndex = cards.findIndex((c) => c.id === index);
    console.log(cardIndex);
    const cardsCopy = [...cards];
    cardsCopy[cardIndex].name = ev.target.value;
    setCards(cardsCopy);
  };
  return (
    <div className="App">
      <button onClick={toggleCardsHandler}>{`${
        showCards ? "Hide" : "Show"
      } cards`}</button>
      {showCards && (
        <Cards
          cards={cards}
          deleted={deleteCardHandler}
          changed={changeNameHandler}
        />
      )}
    </div>
  );
};

export default App;
