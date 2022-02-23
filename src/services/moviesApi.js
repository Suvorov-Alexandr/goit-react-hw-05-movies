import axios from "axios";
import toast from "react-hot-toast";

const API_KEY = "94029b5923bad7e019f6c36b514d4e3e";

const apiConfig = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
  },
});

async function getTrendingMovies(page) {
  const params = {
    page,
  };
  const response = await apiConfig.get(`/trending/movie/day`, { params });
  return response.data.results;
}

async function getMovieById(movieId) {
  const response = await apiConfig.get(`/movie/${movieId}`);
  return response.data;
}

async function getMoviesBySearchQuery(query) {
  if (!query) {
    return;
  }

  const params = {
    query,
  };
  const response = await apiConfig.get("search/movie", { params });

  if (response.data.results.length === 0) {
    toast.error(`Your search ${query} did not match any listings.`);
    return;
  }
  return response.data.results;
}

async function getMovieCast(movieId) {
  const response = await apiConfig(`/movie/${movieId}/credits`);
  return response.data;
}

async function getMovieRewiews(movieId) {
  const response = await apiConfig(`/movie/${movieId}/reviews`);
  return response.data.results;
}

export {
  getTrendingMovies,
  getMovieById,
  getMovieCast,
  getMovieRewiews,
  getMoviesBySearchQuery,
};
