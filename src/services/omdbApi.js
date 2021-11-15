const API_KEY = 'e889c907';
const OMDB_API_URL = `https://www.omdbapi.com/`;

export const getSearchResults = async (query, year, type, page) => {
  const queryEncoded = query.trim().replace(" ", "+");

  return new Promise((resolve) => {
    fetch(`${OMDB_API_URL}?apikey=${API_KEY}&s=${queryEncoded}&y=${year}&type=${type}&page=${page}`, {
      method: "GET",
    }).then((res) => {
      resolve(res.json());
    });
  });
};

export const getItem = async (id) =>
  new Promise((resolve) => {
    fetch(`${OMDB_API_URL}?apikey=${API_KEY}&i=${id}`, {
      method: "GET",
    }).then((res) => {
      resolve(res.json());
    });
  });
