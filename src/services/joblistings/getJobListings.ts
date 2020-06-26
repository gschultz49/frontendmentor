import { getEndpoint } from "./joblistings-api-utils";
import { fetcher } from "../utils";

export const getJobListingFileName = "/get-joblistings";

export default async function GetJobListingData() {
  const fullEndpointUrl = getEndpoint(getJobListingFileName);
  return await fetcher(fullEndpointUrl);
}
