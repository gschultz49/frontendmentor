const ArticleCard = props => {
  const { img, author, title, description } = props.card;
  const imgLocation = `/images/${img}`;

  return (
    <div className="articleCard flex-1">
      <img src={imgLocation} alt={title}></img>
      <p>{author}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ArticleCard;
