import { articleCard } from "../pages/api/get-articles";
import { useState, useEffect } from "react";
import ArticleCard from "./articleCard";
import fetch from "isomorphic-fetch";

const ArticlesGrid = () => {
  const [articleCards, setCards] = useState<articleCard[]>([]);
  useEffect(() => {
    const endpoint = "/api/get-articles";
    fetch(endpoint)
      .then(res => res.json())
      .then(setCards)
      .catch(err => {
        console.log(err);
      });
  }, []); // only run once
  return (
    <section id="articles-grid" className="flex flex-row">
      {articleCards.map((article, idx) => {
        return <ArticleCard key={idx} card={article} />;
      })}
    </section>
  );
};
export default ArticlesGrid;
