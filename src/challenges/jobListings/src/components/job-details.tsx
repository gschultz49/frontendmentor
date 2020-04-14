const JobDetails = ({ postedAt, contract, location }) => {
  return (
    <div className="flex content-center">
      <p className="pr-4">{postedAt}</p>
      <p className="pr-4">•</p>
      <p className="pr-4">{contract}</p>
      <p className="pr-4">•</p>
      <p className="pr-4">{location}</p>
      <style jsx>{`
        p {
          font-size: 12px;
          color: var(--Dark-Grayish-Cyan);
        }
      `}</style>
    </div>
  );
};

export default JobDetails;
