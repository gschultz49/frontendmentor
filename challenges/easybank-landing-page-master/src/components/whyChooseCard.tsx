const WhyChooseCard = props => {
  const { img, title, description } = props.card;
  const imgLocation = `/images/${img}`;

  return (
    <section className="whyChooseCard w-1/4">
      <img src={imgLocation} alt={title}></img>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default WhyChooseCard;
