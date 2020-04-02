import { fetcher } from "./utils/api-fetcher";

export const GetArticlesEndpoint = "/api/get-articles";

export default async function GetArticlesGridData(
  url = GetArticlesEndpoint
) {
  const baseUrl = "http://localhost:3000";
  const articles = await fetcher(`${baseUrl}${url}`);
  return articles;
}
