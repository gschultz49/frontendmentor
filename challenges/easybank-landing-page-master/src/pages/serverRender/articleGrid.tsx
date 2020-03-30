import { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import { articleCard } from "../api/get-articles";
import ArticleCard from "../../components/articleCard";

const ArticlesGrid = () => {
  const [articleCards, setCards] = useState<articleCard[]>(undefined);
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
        return <ArticleCard key={idx} card={article} />;
      })}
    </section>
  );
};
export default ArticlesGrid;
