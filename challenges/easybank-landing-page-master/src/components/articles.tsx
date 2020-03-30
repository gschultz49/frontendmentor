import BodyContainer from "./body-container";
import ArticlesGrid from "../pages/serverRender/articleGrid";

const Articles = () => {
  return (
    <section id="articles-top">
      <>
        <ArticlesTop />
        <ArticlesGrid />
      </>
    </section>
  );
};

const ArticlesTop = () => {
  return <h3> Latest Articles</h3>;
};
const ArticlesContainer = BodyContainer(Articles);
export default ArticlesContainer;
