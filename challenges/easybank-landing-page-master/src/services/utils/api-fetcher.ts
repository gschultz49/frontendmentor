import fetch from "isomorphic-fetch";

export const baseUrl = req =>
  req ? `${req.protocol}://${req.get("Host")}` : "";

export const fetcher = url =>
  fetch(url)
    .then(r => r.json())
    .catch(err => console.warn(err));

export const retrieve = async (req, url, useBaseUrl = true) => {
  const fullBaseUrl = baseUrl(req);
  let fullUrl = useBaseUrl ? `${fullBaseUrl}${url}` : url;
  const result = await fetcher(fullUrl);
};
