import WhyChooseCard from "./whyChooseCard";

const WhyChooseGrid = ({ whyChoose }) => {
  return (
    <section id="whyChoose-grid" className="flex flex-row">
      {whyChoose.map((card, idx) => {
        return <WhyChooseCard key={idx} card={card} />;
      })}
    </section>
  );
};

export default WhyChooseGrid;
