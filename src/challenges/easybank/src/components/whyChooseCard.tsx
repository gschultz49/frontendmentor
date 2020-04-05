import { getImage } from "../../../../services/easybank/easybank-api-utils";

const WhyChooseCard = (props) => {
  const { img, title, description } = props.card;
  const imgLocation = getImage(img);

  return (
    <div className="whyChooseCard flex-1 mr-10">
      <img src={imgLocation} alt={title}></img>
      <h1 className="py-8">{title}</h1>
      <p>{description}</p>
      <style jsx>{`
        h1 {
          font-size: calc(var(--main-font-size) * 1.25);
          font-weight: calc(var(--main-font-weight) + 100);
        }
        p {
          color: var(--Grayish-Blue);
        }
      `}</style>
    </div>
  );
};

export default WhyChooseCard;
