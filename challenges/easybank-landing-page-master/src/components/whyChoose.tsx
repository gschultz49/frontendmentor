import BodyContainer from "./body-container";
import WhyChooseCard from "./whyChooseCard";

const WhyChoose = () => {
  return (
    <section id="whyChoose" className="flex">
      <>
        <WhyChooseTop />
        <WhyChooseGrid />
      </>
    </section>
  );
};

const WhyChooseTop = () => {
  return (
    <section id="whyChoose-top" className="flex mb-4">
      <div className="w-full">
        <h3>Why Choose Easybank?</h3>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub.
        </p>
        <p>Control your finances like never before.</p>
      </div>
    </section>
  );
};

const WhyChooseGrid = () => {
  interface whyChooseCard {
    img: string;
    title: string;
    description: string;
  }
  const whyChooseCards: whyChooseCard[] = [
    {
      img: "icon-online.svg",
      title: "Online Banking",
      description:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world"
    },
    {
      img: "icon-budgeting.svg",
      title: "Simple Budgeting",
      description:
        "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits"
    },
    {
      img: "icon-onboarding.svg",
      title: "Online Banking",
      description:
        "We don't do branches. Open your account in minutes online and start taking control of your finances in the right way."
    },
    {
      img: "icon-api.svg",
      title: "Open API",
      description:
        "Manage your savings, investments, pension, and much more from your account. Tracking your money has never been easier"
    }
  ];
  return (
    <section id="whyChoose-grid" className="flex">
      {whyChooseCards.map(card => {
        return <WhyChooseCard card={card} />;
      })}
    </section>
  );
};

const WhyChooseContainer = BodyContainer(WhyChoose);
export default WhyChooseContainer;
