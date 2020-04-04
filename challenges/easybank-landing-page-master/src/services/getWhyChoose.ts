import { fetcher, BASE_URL } from "./utils/api-fetcher";

export const GetWhyChooseCardsEndpoint = "/api/get-whychoose";

export default async function GetWhyChooseData(
  url = GetWhyChooseCardsEndpoint
) {
  const whyChoose = await fetcher(`${BASE_URL}${url}`);
  return whyChoose;
}
