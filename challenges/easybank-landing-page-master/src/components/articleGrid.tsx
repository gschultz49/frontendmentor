import ArticleCard from "./articleCard";
import useSWR from "swr";
import { fetcher } from "../utils/api-fetcher";

const GetArticlesEndpoint = "/api/get-articles";

const ArticlesGrid = props => {
  const initialData = props.data;
  const { data = [] } = useSWR(GetArticlesEndpoint, fetcher, { initialData });
  return (
    <section id="articles-grid" className="flex flex-row">
      {data.map((article, idx) => {
        return <ArticleCard key={idx} card={article} />;
      })}
    </section>
  );
};

export async function getServerSideProps() {
  const data = await fetcher(GetArticlesEndpoint);
  return { props: { data } };
}

export default ArticlesGrid;
