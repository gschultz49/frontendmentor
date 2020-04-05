import { getImage } from "../../../../services/easybank/easybank-api-utils";

const ArticleCard = props => {
  const { img, author, title, description } = props.card;
  const imgLocation = getImage(img);

  return (
    <div className="articleCard flex-1 mr-8">
      <img
        src={imgLocation}
        alt={title}
        className="rounded-t h-48 w-full"
      ></img>
      <div className="articleCardContent pt-8 pl-8 pr-8 pb-4 ">
        <p className="author">By {author}</p>
        <h1 className="title py-2">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <style jsx>{`
        .articleCard {
          background-color: var(--White);
        }
        .author {
          font-size: calc(var(--sub-navigation-font-size) * 0.65);
          color: var(--Grayish-Blue);
        }
        .title {
          font-size: calc(var(--main-font-size) * 0.85);
          font-weight: calc(var(--main-font-weight) + 300);
          color: var(--Grayish-Blue);
        }
        .description {
          font-size: calc(var(--sub-navigation-font-size) * 0.85);
          color: var(--Grayish-Blue);
        }
      `}</style>
    </div>
  );
};

export default ArticleCard;
