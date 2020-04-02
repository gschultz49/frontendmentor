import { fetcher } from "./utils/api-fetcher";

export const GetWhyChooseCardsEndpoint = "/api/get-whychoose";

export default async function GetWhyChooseData(
  url = GetWhyChooseCardsEndpoint
) {
  const baseUrl = "http://localhost:3000";
  const whyChoose = await fetcher(`${baseUrl}${url}`);
  return whyChoose;
}
