import Tag from "./tag";
import { getImage } from "../../../../services/joblistings/joblistings-api-utils";

const JobFilter = ({ selectedTags, removeTag }) => {
  return (
    <section className="flex w-full p-8 shadow-xl">
      {selectedTags.map((tag) => {
        return (
          <JobFilterTagSpacing
            text={tag}
            backgroundColor="isNotSelected"
            removeTag={removeTag}
          />
        );
      })}
    </section>
  );
};

const JobFilterTagSpacing = (props) => {
  return (
    <div className="px-2">
      <JobFilterTag {...props} />
    </div>
  );
};

const JobFilterTag = ({ text, backgroundColor, removeTag }) => {
  const removeIcon = getImage("icon-remove.svg");

  const removeTagByValue = (e) => {
    removeTag(text);
  };
  return (
    <div className="rounded-xl">
      <div className="inline-block">
        <Tag text={text} backgroundColor={backgroundColor} />
      </div>
      <div className="filterTagRemove inline-block align-middle h-6 w-6">
        <img
          src={removeIcon}
          alt="remove icon"
          onClick={removeTagByValue}
        ></img>
      </div>
      <style jsx>{`
        .filterTagRemove {
          background-color: black;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default JobFilter;
