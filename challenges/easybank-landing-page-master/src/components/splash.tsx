import BodyContainer from "./body-container";
import Button from "./button";

const Splash = () => {
  return (
    <section id="splash" className="flex">
      {/* <section id="splash-container"> */}
        <>
          <LeftSplash />
          <RightSplash />
        </>
      {/* </section> */}
    </section>
  );
};

const LeftSplash = () => {
  return (
    <section id="splash-left" className="w-7/12">
      <h3> Next generation </h3>
      <h3> digital banking</h3>
      <p>
        Take your financial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <section>
        <Button label={"Request Invite"} />
      </section>
    </section>
  );
};

const RightSplash = () => {
  return (
    <section id="splash-right" className="w-5/12">
      {/* <div id="img-foreground-container"> */}
      <img id="img-foreground" src="/images/image-mockups.png"></img>
      {/* </div> */}
    </section>
  );
};

export default Splash;
// const SplashContainer = BodyContainer(Splash);
// export default SplashContainer;
