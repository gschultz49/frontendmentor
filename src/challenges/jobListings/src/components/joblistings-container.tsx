import JobListing from "./joblisting";
import { useState } from "react";
import JobFilter from "./job-filters";

const JobListingContainer = ({ joblistings }) => {
  const [selectedTags, setCollectedTags] = useState([]);

  const updateTags = (value) => {
    console.log(`value:${value}, selected tags: ${selectedTags}`);
    if (selectedTags.includes(value)) {
      // remove value from list
      const withRemovedTag = selectedTags.filter((tag) => tag != value);
      setCollectedTags(withRemovedTag);
    } else {
      // append value to list
      setCollectedTags([value, ...selectedTags]);
    }
  };

  return (
    <>
      <section
        id="joblistings-container"
        className="flex flex-wrap mx-48 mt-20 mb-20"
      >
        <JobFilter selectedTags={selectedTags} />
        {joblistings.map((job, idx) => {
          return <JobListing key={idx} job={job} updateTags={updateTags} />;
        })}
        <style jsx>{`
          section {
            background-color: white;
          }
        `}</style>
      </section>
    </>
  );
};

export default JobListingContainer;
