const ArticleCard = props => {
  const { img, author, title, description } = props.card;
  const imgLocation = `/images/${img}`;

  return (
    <div className="articleCard flex-1">
      <img src={imgLocation} alt={title}></img>
      <div className="articleCardContent">
        <p className="author">By {author}</p>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
