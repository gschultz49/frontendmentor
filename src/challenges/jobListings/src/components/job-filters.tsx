const JobFilter = ({ selectedTags }) => {
  return (
    <section className="flex w-full my-4 p-8 shadow-xl">
      <h1>{selectedTags}</h1>
    </section>
  );
};

export default JobFilter;
