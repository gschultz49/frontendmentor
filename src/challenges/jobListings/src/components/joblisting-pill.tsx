const Pill = ({ text }) => {
  const pillTypeCss = text === "NEW!" ? "pill-new" : "pill-featured";
  const pillClass = `rounded-full  ${pillTypeCss}`;
  return (
    <div className={pillClass}>
      <p className="px-2 inline-block align-middle">{text}</p>
      <style jsx>{`
        p {
          color: white;
          font-weight: bold;
          font-size: 8px;
          text-align: center;
        }

        .pill-new {
          background-color: var(--Desaturated-Dark-Cyan);
        }
        .pill-featured {
          background-color: black;
        }
      `}</style>
    </div>
  );
};

export default Pill;
