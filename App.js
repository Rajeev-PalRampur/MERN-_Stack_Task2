import React, { useState, useEffect } from 'react';
import vector from './vector.svg'; // ✅ Make sure Vector.svg is in the src folder
import './App.css';
import logo from './movieimage.jpg'; // path to your logo image

import MovieCard from './components/MovieCard.js';

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=86ecbe3d";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
  if (searchTerm.trim() !== "") {
    searchMovies(searchTerm);
  }
}, [searchTerm]);


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div className='main'>
      <div className='navbar'>
        <div className='logo'>
          <h1><i><div className='logo'>
  <img src={logo} alt="Movie Pro Logo" className="logo-img" />
</div>
</i></h1>
        </div>
        <div className='search'>
          <input
            value={searchTerm}
            className='input'
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search for movies, series, etc..'
          />
          <img
            src={vector}
            className='icon'
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>

      {movies?.length > 0 ? (
        <div className='content'>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>Search Movies !...</h2>
        </div>
      )}
    </div>
  );
};

export default App;

