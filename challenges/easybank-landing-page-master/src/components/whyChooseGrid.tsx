import WhyChooseCard from "./whyChooseCard";
import useSWR from "swr";
import { fetcher } from "../utils/api-fetcher";

const GetWhyChooseCardsEndpoint = "/api/get-whychoose";

const WhyChooseGrid = props => {
  const initialData = props.data;
  const { data = [] } = useSWR(GetWhyChooseCardsEndpoint, fetcher, {
    initialData
  });
  return (
    <section id="whyChoose-grid" className="flex flex-row">
      {data.map((card, idx) => {
        return <WhyChooseCard key={idx} card={card} />;
      })}
    </section>
  );
};

export async function getServerSideProps() {
  const data = await fetcher(GetWhyChooseCardsEndpoint);
  return { props: { data } };
}

export default WhyChooseGrid;
