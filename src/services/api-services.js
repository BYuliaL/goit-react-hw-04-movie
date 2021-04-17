import Axios from 'axios';

const ApiKey = 'bfc0b177c45bde411d6d53ddc48eee25';

const apiTrendMovies = async () => {
  return await Axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${ApiKey}`,
  ).then(response => response.data.results);
};

const apiSearchMovie = async query => {
  return await Axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${query}&language=en-US&page=1&include_adult=false`,
  ).then(response => response.data.results);
};

const apiDetails = async movieId => {
  return await Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${ApiKey}&language=en-US`,
  ).then(response => response.data);
};

const apiCast = async movieId => {
  return await Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${ApiKey}&language=en-US`,
  ).then(response => response.data.cast);
};

const apiReviews = async movieId => {
  return await Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${ApiKey}&language=en-US&page=1`,
  ).then(response => response.data.results);
};

const api = {
  apiTrendMovies,
  apiSearchMovie,
  apiDetails,
  apiReviews,
  apiCast,
};
export default api;
