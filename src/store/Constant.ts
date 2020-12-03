const omdb_url = "https://www.omdbapi.com/";
const omdb_api_key = "9d3650fa";

export const setFetchURL = (value: string | undefined, type: string) =>
  `${omdb_url}?${type}=${value}&apikey=${omdb_api_key}`;
