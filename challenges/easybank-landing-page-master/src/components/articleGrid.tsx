import ArticleCard from "./articleCard";
import fetch from "isomorphic-fetch";
import useSWR from "swr";

const fetcher = url => fetch(url).then(r => r.json());

const ArticlesGrid = () => {
  const { data = [], error } = useSWR("/api/get-articles", fetcher);
  return (
    <section id="articles-grid" className="flex flex-row">
      {error && console.log(error)}
      {data.map((article, idx) => {
        return <ArticleCard key={idx} card={article} />;
      })}
    </section>
  );
};
export default ArticlesGrid;
