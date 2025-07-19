import axios from 'axios';

const API_KEY = 'api';
const BASE_URL = 'https://www.omdbapi.com';

export const fetchPopularMovies = () =>
  axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

export const searchMovies = (query) =>
  axios.get(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);

export const fetchMoviesByGenre = (genreId) =>
  axios.get(`${BASE_URL}/discover/movie?with_genres=${genreId}&api_key=${API_KEY}`);

// ✅ Add this to fix FilterBar.js
export const fetchGenres = () =>
  axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);

// ✅ Add this to fix MovieDetails.js
export const fetchMovieDetails = (movieId) =>
  axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);


