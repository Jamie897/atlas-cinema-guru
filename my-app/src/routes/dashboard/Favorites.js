import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/titles/favorite')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the favorite movies!', error);
      });
  }, []);

  return (
    <div className="favorites-container">
      <h1>Movies you like</h1>
      <ul className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
