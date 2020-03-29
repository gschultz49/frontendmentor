import BodyContainer from "./body-container";
import Button from "./button";

const Splash = () => {
  return (
    <section id="splash" className="flex">
      <>
        <LeftSplash />
        <RightSplash />
      </>
    </section>
  );
};

const LeftSplash = () => {
  return (
    <section id="splash-left" className="flex-1 align-middle py-32">
      <h3 className="align-baseline"> Next generation digital banking</h3>
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
    <section id="splash-left" className="flex-1 align-middle">
      <h1> photo meeee</h1>
    </section>
  );
};

const SplashContainer = BodyContainer(Splash);
export default SplashContainer;
