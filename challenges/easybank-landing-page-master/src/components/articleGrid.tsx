import ArticleCard from "./articleCard";

const ArticlesGrid = ({ articles }) => {
  return (
    <section id="articles-grid" className="flex flex-row">
      {articles.map((article, idx) => {
        return <ArticleCard key={idx} card={article} />;
      })}
    </section>
  );
};

export default ArticlesGrid;
