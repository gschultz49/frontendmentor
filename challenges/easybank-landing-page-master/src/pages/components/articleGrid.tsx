import ArticlesCard from "./articlesCard";
import { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";

const ArticlesGrid = () => {
  const [articleCards, setCards] = useState([]);
  useEffect(() => {
    const endpoint = "/api/get-articles";
    fetch(endpoint)
      .then(res => res.json())
      .then(setCards);
  }, []); // only run once
  return (
    <section id="articles-grid" className="flex flex-row">
      {articleCards.map((article, idx) => {
        console.log(article);
        return <ArticlesCard key={idx} card={article} />;
      })}
    </section>
  );
};
export default ArticlesGrid;
