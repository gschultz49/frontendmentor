import { whyChooseCard } from "../api/get-whychoose";
import { useState, useEffect } from "react";
import WhyChooseCard from "../../components/whyChooseCard";

const WhyChooseGrid = () => {
  const [whyChooseCards, setCards] = useState<whyChooseCard[]>(undefined);

  useEffect(() => {
    const endpoint = "http://localhost:3000/api/get-whychoose";
    fetch(endpoint)
      .then(res => res.json())
      .then(setCards);
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
