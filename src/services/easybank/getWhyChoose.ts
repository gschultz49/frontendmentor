import { fetcher, BASE_URL } from "../utils/api-fetcher";
import { GetWhyChooseCardsEndpoint } from "../../pages/api/easybank/easybank-utils";

export default async function GetWhyChooseData(
  url = GetWhyChooseCardsEndpoint
) {
  const whyChoose = await fetcher(`${BASE_URL}${url}`);
  return whyChoose;
}
