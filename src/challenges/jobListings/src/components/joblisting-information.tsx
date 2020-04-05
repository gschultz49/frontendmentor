const JobListingInformation = (props) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full bg-gray-500">
        <div className="flex">
          <h1 className="company mr-2">{props.company}</h1>
          {props.new && <PillSpacer text="NEW!"></PillSpacer>}
          {props.featured && <PillSpacer text="FEATURED"></PillSpacer>}
        </div>
      </div>
      <div className="w-full bg-gray-400">2</div>
      <div className="w-full bg-gray-500">3</div>
      <style jsx>{`
        .company {
          color: var(--Desaturated-Dark-Cyan);
        }
      `}</style>
    </div>
  );
};

const PillSpacer = (props) => {
  return (
    <div className="px-1">
      <Pill {...props} />
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
