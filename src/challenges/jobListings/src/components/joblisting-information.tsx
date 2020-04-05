import JobDetails from "./joblisting-details";
import Pill from "./joblisting-pill";

const JobListingInformation = (props) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full py-1 bg-gray-500">
        <div className="flex">
          <h2 className="company mr-2">{props.company}</h2>
          {props.new && <PillSpacer text="NEW!"></PillSpacer>}
          {props.featured && <PillSpacer text="FEATURED"></PillSpacer>}
        </div>
      </div>
      <div className="w-full py-1 bg-gray-400">
        <h1 className="position">{props.position}</h1>
      </div>
      <div className="w-full py-1 bg-gray-500">
        <JobDetails
          postedAt={props.postedAt}
          contract={props.contract}
          location={props.location}
        />
      </div>
      <style jsx>{`
        .company {
          color: var(--Desaturated-Dark-Cyan);
        }
        .position {
          font-weight: bold;
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

export default JobListingInformation;
