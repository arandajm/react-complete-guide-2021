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
      id: 2,
      name: "Alexander Kshlerin",
      title: "Corporate Group Producer",
    },
    {
      id: 3,
      name: "Cristian Stroman",
      title: "Dynamic Metrics Liaison",
    },
    {
      id: 4,
      name: "Solon Bartell",
      title: "Sortware Developer",
    },
  ]);
  return (
    <div className="App">
      <Cards cards={cards} />
    </div>
  );
};

export default App;
