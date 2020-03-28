import BodyContainer from "./body-container";

const Splash = props => {
  return (
    <section id="splash-container">
      <section id="splash">
        <h1> Next Generation Digital Banking</h1>
      </section>
    </section>
  );
};

const SplashContainer = BodyContainer(Splash);
export default SplashContainer;
