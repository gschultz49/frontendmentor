import JobListing from "./joblisting";
import { useState } from "react";

const JobListingContainer = ({ joblistings }) => {
  const [selectedTags, setCollectedTags] = useState([]);

  const updateTags = (value) => {
    console.log(`value:${value}, selected tags: ${selectedTags}`);
    if (selectedTags.includes(value)) {
      const withRemovedTag = selectedTags.filter((tag) => tag === value);
      setCollectedTags(withRemovedTag);
    } else {
      setCollectedTags([value, ...selectedTags]);
    }
  };

  return (
    <section
      id="joblistings-container"
      className="flex flex-wrap mx-48 mt-20 mb-20"
    >
      {joblistings.map((job, idx) => {
        return <JobListing key={idx} job={job} updateTags={updateTags} />;
      })}
    </section>
  );
};

export default JobListingContainer;
