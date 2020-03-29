import Navigation from "../components/navigation";
import Splash from "../components/splash";
import WhyChose from "../components/whyChoose";
import Articles from "../components/articles";
import Footer from "../components/footer";

const App = () => {
  return (
    // this syntax is React fragments, enables a function to return multiple JSX elements
    <>
      <Navigation id={"navigation-container"} />
      <Splash />
      <WhyChose id={"whyChoose-container"} />
      <Articles id={"articles-container"} />
      <Footer id={"footer-container"} />
    </>
  );
};

export default App;
