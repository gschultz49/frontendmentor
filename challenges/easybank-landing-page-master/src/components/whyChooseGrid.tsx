import { whyChooseCard } from "../pages/api/get-whychoose";
import { useState, useEffect } from "react";
import WhyChooseCard from "./whyChooseCard";
import fetch from "isomorphic-fetch";

const WhyChooseGrid = () => {
  const [whyChooseCards, setCards] = useState<whyChooseCard[]>([]);

  useEffect(() => {
    const endpoint = "/api/get-whychoose";
    fetch(endpoint)
      .then(res => res.json())
      .then(setCards)
      .catch(err => {
        console.log(err);
      });
  }, []); // only run once
  return (
    <section id="whyChoose-grid" className="flex flex-row">
      {whyChooseCards.map((card, idx) => {
        return <WhyChooseCard key={idx} card={card} />;
      })}
    </section>
  );
};

export default WhyChooseGrid;
