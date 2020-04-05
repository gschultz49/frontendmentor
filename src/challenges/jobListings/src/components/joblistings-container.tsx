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
  const removeTag = (text) => {
    const withRemovedTag = selectedTags.filter((tag) => tag != text);
    setCollectedTags(withRemovedTag);
  };

  const getJobTags = ({ role, level, languages = [], tools = [] }) => {
    return [role, level, ...languages, ...tools];
  };

  // logical AND search for filtering
  const filterAnd = (jobTags) => {
    return selectedTags.every((val) => jobTags.includes(val));
  };

  // logical OR search for filtering
  const filterOr = (jobTags) => {
    let shouldShow = false;
    jobTags.forEach((tag) => {
      if (selectedTags.includes(tag)) {
        shouldShow = true;
      }
    });
    return shouldShow;
  };

  const shouldShowJobListing = (job) => {
    const jobTags = getJobTags(job);
    if (selectedTags.length === 0) {
      return true;
    }
    return filterAnd(jobTags);
  };

  return (
    <>
      <section
        id="joblistings-container"
        className="flex flex-wrap mx-48 mt-20 mb-20"
      >
        <JobFilter selectedTags={selectedTags} removeTag={removeTag} />
        {joblistings.map((job, idx) => {
          if (shouldShowJobListing(job)) {
            return <JobListing key={idx} job={job} updateTags={updateTags} />;
          } else {
            return null;
          }
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
