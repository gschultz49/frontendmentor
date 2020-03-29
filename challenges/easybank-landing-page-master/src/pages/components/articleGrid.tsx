import ArticlesCard from "./articlesCard";
import { useState, useEffect } from "react";

const ArticlesGrid = () => {
  const [articleCards, setCards] = useState([]);
  useEffect(() => {
    const baseUrl = "http://localhost:3000";
    const endpoint = "/api/get-articles";
    const formattedEndpoint = `${baseUrl}${endpoint}`;
    fetch(formattedEndpoint)
      .then(res => res.json())
      .then(setCards);
  }, []); // only run once
  return (
    <section id="articles-grid" className="flex flex-row">
      {articleCards.map(article => {
        console.log(article);
        return <ArticlesCard key={article.img} card={article} />;
      })}
    </section>
  );
};
export default ArticlesGrid;
