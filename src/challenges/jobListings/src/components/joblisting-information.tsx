const JobListingInformation = (props) => {
  const isNew = props.isNew;
  const isFeatured = props.isFeatured;
  return (
    <div className="flex flex-wrap">
      <div className="w-full bg-gray-500">
        <div className="flex">
          <h1>{props.company}</h1>
          {/* {isNew && } */}
          <Pill text="NEW!"></Pill>
          <Pill text="FEATURED"></Pill>
        </div>
      </div>
      <div className="w-full bg-gray-400">2</div>
      <div className="w-full bg-gray-500">3</div>
    </div>
  );
};

const Pill = ({ text }) => {
  const pillTypeCss = text === "NEW!" ? "pill-new" : "pill-featured";
  const pillClass = `rounded-full  ${pillTypeCss}`;
  return (
    <div className={pillClass}>
      <p className="px-2 inline-block align-middle">{text}</p>
      <style jsx>{`
        p {
          color: white;
          font-weight: bold;
          font-size: 8px;
          text-align: center;
        }

        .pill-new {
          background-color: var(--Desaturated-Dark-Cyan);
        }
        .pill-featured {
          background-color: black;
        }
      `}</style>
    </div>
  );
};

export default JobListingInformation;
