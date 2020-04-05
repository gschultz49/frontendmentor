import BodyContainer from "./body-container";
import ArticlesGrid from "./articleGrid";

const Articles = (props) => {
  return (
    <section id="articles-top" className="py-16">
      <>
        <ArticlesTop />
        <ArticlesGrid articles={props.articles} />
      </>
    </section>
  );
};

const ArticlesTop = () => {
  return (
    <>
      <h3 className="py-8"> Latest Articles</h3>
      <style jsx>{`
        h3 {
          font-size: calc(var(--main-font-size) * 2.25);
        }
      `}</style>
    </>
  );
};
const ArticlesContainer = BodyContainer(Articles);
export default ArticlesContainer;
