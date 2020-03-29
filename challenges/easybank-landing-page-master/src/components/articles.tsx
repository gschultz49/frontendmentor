import BodyContainer from "./body-container";
import ArticlesGrid from "./articleGrid";

const Articles = props => {
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
// export default Articles;
