import Navigation from "../components/navigation";
import Splash from "../components/splash";
import { WhyChose } from "../components/whyChoose";
import { Articles } from "../components/articles";

const App = () => {
  return (
    // this syntax is React fragments, enables a function to return multiple JSX elements
    <>
      <Navigation id={"navigation-container"} />
      <Splash id={"splash-container"} />
      {/* <WhyChose />
      <Articles /> */}
    </>
  );
};

export default App;
