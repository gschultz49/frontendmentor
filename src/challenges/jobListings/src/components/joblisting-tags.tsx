const JobListingTags = ({ role, level, languages = [], tools = [] }) => {
  return (
    <div className="flex content-center justify-end h-full flex-wrap">
      {/* <div className="w-1/12 p-2">
        <div className="text-gray-700 text-center bg-gray-400 p-2">1</div>
      </div>
      <div className="w-1/12 p-2">
        <div className="text-gray-700 text-center bg-gray-400 p-2">2</div>
      </div>
      <div className="w-1/12 p-2">
        <div className="text-gray-700 text-center bg-gray-400 p-2">3</div>
      </div>
      <div className="w-1/12 p-2">
        <div className="text-gray-700 text-center bg-gray-400 p-2">4</div>
      </div>
      <div className="w-1/12 p-2">
        <div className="text-gray-700 text-center bg-gray-400 p-2">5</div>
      </div> */}
      <TagSpacer text={role}></TagSpacer>
      <TagSpacer text={level}></TagSpacer>
      {languages.map((language) => {
        return <TagSpacer text={language}></TagSpacer>;
      })}
      {tools.map((tool) => {
        return <TagSpacer text={tool}></TagSpacer>;
      })}

      {/* <div className="flex-1 h-12 text-right">
        <div className="m-auto">
          <span className="inline-block align-middle">{role}</span>
        </div>
      </div>
      <div className="flex-1 h-12 text-right">
        <span className="inline-block align-middle">{level}</span>
      </div>
      {languages.map((language) => {
        return (
          <div className="flex-1 h-12 text-right">
            <span className="inline-block align-middle">{language}</span>
          </div>
        );
      })} */}
    </div>
  );
};

export default JobListingTags;

const TagSpacer = ({ text }) => {
  return (
    <div className="px-1">
      <div className="text-gray-700 text-center bg-gray-400 p-2">
        <Tag text={text} />
      </div>
    </div>
  );
};

const Tag = ({ text }) => {
  return (
    <section className="">
      <p className="px-1 inline-block align-middle">{text}</p>
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
