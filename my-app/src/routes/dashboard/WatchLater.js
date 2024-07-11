import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';

const WatchLater = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/api/titles/watchlater')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the watch later movies!', error);
      });
  }, []);

  return (
    <div className="watchlater-container">
      <h1>Movies to Watch Later</h1>
      <ul className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default WatchLater;
