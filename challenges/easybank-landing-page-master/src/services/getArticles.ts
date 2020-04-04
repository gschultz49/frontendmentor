import { fetcher, BASE_URL } from "./utils/api-fetcher";

export const GetArticlesEndpoint = "/api/get-articles";

export default async function GetArticlesGridData(url = GetArticlesEndpoint) {
  const articles = await fetcher(`${BASE_URL}${url}`);
  return articles;
}
