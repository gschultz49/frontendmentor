const JobListingTags = ({ role, level, languages = [], tools = [] }) => {
  return (
    <div className="flex content-center justify-end h-full flex-wrap">
      <TagSpacer text={role}></TagSpacer>
      <TagSpacer text={level}></TagSpacer>
      {languages.map((language) => {
        return <TagSpacer text={language}></TagSpacer>;
      })}
      {tools.map((tool) => {
        return <TagSpacer text={tool}></TagSpacer>;
      })}
    </div>
  );
};

export default JobListingTags;

const TagSpacer = ({ text }) => {
  return (
    <div className="px-1">
      <div className="text-center p-1">
        <Tag text={text} />
      </div>
    </div>
  );
};

const Tag = ({ text }) => {
  return (
    <section className="rounded-sm">
      <p className="px-2 py-1 inline-block align-middle">{text}</p>
      <style jsx>{`
        section {
          background-color: var(--Light-Grayish-Cyan-Background);
        }
        p {
          color: var(--Desaturated-Dark-Cyan);
          font-size: 12px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
};
