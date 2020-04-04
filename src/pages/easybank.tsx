import Navigation from "../challenges/easybank/src/components/navigation";
import Splash from "../challenges/easybank/src/components/splash";
import WhyChose from "../challenges/easybank/src/components/whyChoose";
import Articles from "../challenges/easybank/src/components/articles";
import Footer from "../challenges/easybank/src/components/footer";
import GetArticlesGridData from "../services/easybank/getArticles";
import GetWhyChooseData from "../services/easybank/getWhyChoose";

const App = props => {
  return (
    // this syntax is React fragments, enables a function to return multiple JSX elements
    <>
      <Navigation id={"navigation-container"} />
      <Splash />
      <WhyChose id={"whyChoose-container"} whyChoose={props.whyChoose} />
      <Articles id={"articles-container"} articles={props.articles} />
      <Footer id={"footer-container"} />
      <style jsx global>
        {`
          :root {
            --main-text-color: var(--Dark-Blue);
            --Dark-Blue: hsl(233, 26%, 24%);
            --Lime-Green: hsl(136, 65%, 51%);
            --Bright-Cyan: hsl(192, 70%, 51%);
            --Grayish-Blue: hsl(233, 8%, 62%);
            --Light-Grayish-Blue: hsl(220, 16%, 96%);
            --Very-Light-Gray: hsl(0, 0%, 98%);
            --White: hsl(0, 0%, 100%);

            --main-side-margins: 11%;
            --main-font-size: 18px;
            --main-font-weight: 300;

            --sub-navigation-font-size: 16px;
          }
          body {
            font-size: var(--main-font-size);
            font-family: "Public Sans", sans-serif;
            font-weight: var(--main-font-weight);
          }
          .body-container {
            padding-left: var(--main-side-margins);
            padding-right: var(--main-side-margins);
          }
          #whyChoose-container {
            background-color: var(--Light-Grayish-Blue);
          }
          #articles-container {
            background-color: var(--Very-Light-Gray);
          }
          #footer-container {
            background-color: var(--Dark-Blue);
          }
        `}
      </style>
    </>
  );
};

export async function getStaticProps() {
  const articles = await GetArticlesGridData();
  const whyChoose = await GetWhyChooseData();
  const payload = {
    props: {
      articles: articles,
      whyChoose: whyChoose
    }
  };
  return payload;
}

export default App;
