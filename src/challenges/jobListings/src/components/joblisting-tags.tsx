import { useState } from "react";

const JobListingTags = ({
  role,
  level,
  updateTags,
  languages = [],
  tools = [],
}) => {
  return (
    <div className="flex content-center justify-end h-full flex-wrap">
      <TagSpacer updateTags={updateTags} text={role}></TagSpacer>
      <TagSpacer updateTags={updateTags} text={level}></TagSpacer>
      {languages.map((language) => {
        return (
          <TagSpacer
            key={`${role}${level}${language}`}
            updateTags={updateTags}
            text={language}
          ></TagSpacer>
        );
      })}
      {tools.map((tool) => {
        return (
          <TagSpacer
            key={`${role}${level}${tool}`}
            updateTags={updateTags}
            text={tool}
          ></TagSpacer>
        );
      })}
    </div>
  );
};

export default JobListingTags;

const TagSpacer = ({ text, updateTags }) => {
  return (
    <div className="px-1">
      <div className="text-center p-1">
        <Tag text={text} updateTags={updateTags} />
      </div>
    </div>
  );
};

const Tag = ({ text, updateTags }) => {
  const [isSelected, toggle] = useState(false);

  const selectTag = (e) => {
    toggle(!isSelected);
    updateTags(e.currentTarget.innerHTML);
  };

  const selectionBackgroundColor = isSelected ? "isSelected" : "isNotSelected";
  const sectionClass = `rounded-sm ${selectionBackgroundColor}`;

  return (
    <section className={sectionClass}>
      <p className="px-2 py-1 inline-block align-middle" onClick={selectTag}>
        {text}
      </p>
      <style jsx>{`
        .isSelected {
          background-color: var(--Desaturated-Dark-Cyan);
        }
        .isNotSelected {
          background-color: var(--Light-Grayish-Cyan-Background);
        }
        .isSelected p {
          color: white;
        }
        .isNotSelected p {
          color: var(--Desaturated-Dark-Cyan);
        }
        p {
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};
