import { getImage } from "../../../../services/joblistings/joblistings-api-utils";
import LogoImage from "./joblisting-logo";

const JobListing = ({ job }) => {
  const imgSrc = getImage(job.logo);
  return (
    <section className="flex w-full my-4 p-12 shadow-xl">
      <div className="w-3/4">
        <LogoImage img={imgSrc} company={job.company} />
      </div>
      <div className="w-1/4 bg-gray-400 h-12">{JSON.stringify(job)}</div>

      <style jsx>{`
        section {
          background-color: white;
        }
      `}</style>
    </section>
  );
};

export default JobListing;
