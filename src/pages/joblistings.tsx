import GetJobListingData from "../services/joblistings/getJobListings";

const App = (props) => {
  return (
    // this syntax is React fragments, enables a function to return multiple JSX elements
    <>
      <h1>Job Listings: {JSON.stringify(props.joblistings)}</h1>
      <style jsx global>
        {`
          :root {
            --main-text-color: var(--Dark-Blue);
            --Dark-Blue: hsl(233, 26%, 24%);
            --Lime-Green: hsl(136, 65%, 51%);
            --Bright-Cyan: hsl(192, 70%, 51%);
            --Grayish-Blue: hsl(233, 8%, 62%);
            --Light-Grayish-Blue: hsl(220, 16%, 96%);
            --Very-Light-Gray: hsl(0, 0%, 98%);
            --White: hsl(0, 0%, 100%);

            --main-side-margins: 11%;
            --main-font-size: 18px;
            --main-font-weight: 300;

            --sub-navigation-font-size: 16px;
          }
        `}
      </style>
    </>
  );
};

export async function getStaticProps() {
  const joblistings = await GetJobListingData();
  const payload = {
    props: {
      joblistings: joblistings,
    },
  };
  return payload;
}

export default App;
