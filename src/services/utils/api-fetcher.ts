import fetch from "isomorphic-fetch";

export const fetcher = url =>
  fetch(url)
    .then(r => r.json())
    .catch(err => console.warn(err));

//  issue with the base URL is that it can't determine the dynamic deployment URL
// right now this goes to PROD on a feature branch deploy or whatever is defined in .env
export const BASE_URL = process.env.BASE_URL;
