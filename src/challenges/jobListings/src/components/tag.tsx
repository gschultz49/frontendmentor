interface ITag {
  text: string;
  backgroundColor: string;
  updateTags?: Function | undefined;
}

const UpdatingTag = ({ updateTags, text }) => {
  return (
    <p className="px-2 py-1 inline-block align-middle" onClick={updateTags}>
      {text}
      <style jsx>{`
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
    </p>
  );
};

const PlainTag = ({ text }) => {
  return (
    <p className="px-2 py-1 inline-block align-middle">
      {text}
      <style jsx>{`
        p {
          color: var(--Desaturated-Dark-Cyan);
          font-size: 12px;
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>
    </p>
  );
};

export const Tag = ({ text, backgroundColor, updateTags }: ITag) => {
  const tag = tagCanUpdate(updateTags, text); // tags in the jobs can update state, tags in filter cannot
  return (
    <section className={backgroundColor ? backgroundColor : ""}>
      <style jsx>{`
        .isSelected {
          background-color: var(--Desaturated-Dark-Cyan);
        }
        .isNotSelected {
          background-color: var(--Light-Grayish-Cyan-Background);
        }
      `}</style>
      <style jsx global>{`
        .isSelected > p {
          color: white;
        }
        .isNotSelected > p {
          color: var(--Desaturated-Dark-Cyan);
        }
      `}</style>
      {tag}{" "}
    </section>
  );
};

const tagCanUpdate = (updateTags, text) => {
  let tag;
  if (tagCanUpdate) {
    tag = <UpdatingTag updateTags={updateTags} text={text} />;
  } else {
    tag = <PlainTag text={text} />;
  }
  return tag;
};

export default Tag;
