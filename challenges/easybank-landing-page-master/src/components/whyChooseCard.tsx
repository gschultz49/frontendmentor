const WhyChooseCard = props => {
  const { img, title, description } = props.card;
  const imgLocation = `/images/${img}`;

  return (
    <div className="whyChooseCard flex-1">
      <img src={imgLocation} alt={title}></img>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default WhyChooseCard;
