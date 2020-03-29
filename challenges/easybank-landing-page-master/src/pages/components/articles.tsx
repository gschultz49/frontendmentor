import BodyContainer from "./body-container";
import ArticlesCard from "./articlesCard";
import { articleCard } from "../api/get-articles";
import fetch from "isomorphic-unfetch";
import { NextPage } from "next";
import { GetServerSideProps } from "next";
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
