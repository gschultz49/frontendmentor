import { getImage } from "../../../../services/joblistings/joblistings-api-utils";
import LogoImage from "./joblisting-logo";
import JobListingInformation from "./joblisting-information";

const JobListing = ({ job }) => {
  const imgSrc = getImage(job.logo);
  return (
    <section className="flex w-full my-4 p-12 shadow-xl">
      <div className="w-1/12">
        <div className="flex flex-wrap">
          <LogoImage img={imgSrc} company={job.company} />
        </div>
      </div>
      <div className="w-4/12 pl-4">
        <JobListingInformation {...job} />
      </div>
      <div className="w-7/12 bg-gray-400 h-12">{JSON.stringify(job)}</div>

      <style jsx>{`
        section {
          background-color: white;
        }
      `}</style>
    </section>
  );
};

export default JobListing;
