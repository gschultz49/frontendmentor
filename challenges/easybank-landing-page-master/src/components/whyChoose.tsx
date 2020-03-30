import BodyContainer from "./body-container";
import WhyChooseGrid from "./whyChooseGrid";

const WhyChoose = () => {
  return (
    <section id="whyChoose" className="py-16">
      <>
        <WhyChooseTop />
        <WhyChooseGrid />
      </>
    </section>
  );
};

const WhyChooseTop = () => {
  return (
    <section id="whyChoose-top" className="flex flex-row pb-16">
      <div>
        <h3 className="py-4">Why choose Easybank?</h3>
        <p className="caption">
          We leverage Open Banking to turn your bank account into your financial
          hub.
        </p>
        <p className="caption">Control your finances like never before.</p>
      </div>
      <style jsx>{`
        h3 {
          font-size: calc(var(--main-font-size) * 2.25);
        }
        .caption {
          color: var(--Grayish-Blue);
        }
      `}</style>
    </section>
  );
};

const WhyChooseContainer = BodyContainer(WhyChoose);
export default WhyChooseContainer;
