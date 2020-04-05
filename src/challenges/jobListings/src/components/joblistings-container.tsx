import JobListing from "./joblisting";

const JobListingContainer = ({ joblistings }) => {
  return (
    <section id="joblistings-container" className="flex flex-wrap mx-48 mt-20">
      {joblistings.map((job, idx) => {
        return <JobListing key={idx} job={job} />;
      })}
    </section>
  );
};

export default JobListingContainer;
