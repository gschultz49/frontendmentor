import Tag from "./tag";
import { useState } from "react";

const JobListingTags = ({
  id,
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
            key={id}
            updateTags={updateTags}
            text={language}
          ></TagSpacer>
        );
      })}
      {tools.map((tool) => {
        return (
          <TagSpacer key={id} updateTags={updateTags} text={tool}></TagSpacer>
        );
      })}
    </div>
  );
};

export default JobListingTags;

const TagSpacer = ({ text, updateTags }) => {
  const [isSelected, toggle] = useState(false);

  const selectTag = (e) => {
    toggle(!isSelected);
    updateTags(e.currentTarget.innerHTML);
  };

  const selectionBackgroundColor = isSelected ? "isSelected" : "isNotSelected";
  const backgroundColor = `rounded-sm ${selectionBackgroundColor}`;

  return (
    <div className="px-1">
      <div className="text-center p-1">
        <Tag
          text={text}
          updateTags={selectTag}
          backgroundColor={backgroundColor}
        />
      </div>
    </div>
  );
};
