const LogoImage = ({ img, company }) => {
  return <img src={img} className="object-cover" alt={`${company} Logo`}></img>;
};

export default LogoImage;
