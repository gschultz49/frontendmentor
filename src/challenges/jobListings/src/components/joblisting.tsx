import { getImage } from "../../../../services/joblistings/joblistings-api-utils";
import LogoImage from "./joblisting-logo";
import JobListingInformation from "./joblisting-information";
import JobListingTags from "./joblisting-tags";
const JobListing = ({ job }) => {
  const imgSrc = getImage(job.logo);
  return (
    <section className="flex w-full my-4 p-8 shadow-xl">
      <div className="w-1/12">
        <div className="flex flex-wrap">
          <LogoImage img={imgSrc} company={job.company} />
        </div>
      </div>
      <div className="w-4/12 pl-4">
        <JobListingInformation {...job} />
      </div>
      <div className="w-7/12 h-full">
        <JobListingTags
          role={job.role}
          level={job.level}
          languages={job.languages}
          tools={job.tools}
        />
      </div>

      <style jsx>{`
        section {
          background-color: white;
        }
      `}</style>
    </section>
  );
};

export default JobListing;
