import fetch from "isomorphic-fetch";

export const fetcher = url =>
  fetch(url)
    .then(r => r.json())
    .catch(err => console.warn(err));
