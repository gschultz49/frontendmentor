import BodyContainer from "./body-container";
import WhyChooseGrid from "./whyChooseGrid";

const WhyChoose = () => {
  return (
    <section id="whyChoose">
      <>
        <WhyChooseTop />
        <WhyChooseGrid />
      </>
    </section>
  );
};

const WhyChooseTop = () => {
  return (
    <section id="whyChoose-top" className="flex flex-row">
      <div>
        <h3>Why choose Easybank?</h3>
        <p className="caption">
          We leverage Open Banking to turn your bank account into your financial
          hub.
        </p>
        <p className="caption">Control your finances like never before.</p>
      </div>
    </section>
  );
};

const WhyChooseContainer = BodyContainer(WhyChoose);
export default WhyChooseContainer;
