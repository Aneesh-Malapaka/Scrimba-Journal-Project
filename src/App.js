import React from "react";
import NavBar from "./Components/NavBar";
import Cards from "./Components/Cards";
import data from "./data";
import "./style.css";

export default function App() {
  let cards = data.map((item) => {
    return <Cards key={item.id} item={item} />;
  });

  return (
    <div className="Container">
      <NavBar />
      <section className="cards--list">{cards}</section>
    </div>
  );
}
