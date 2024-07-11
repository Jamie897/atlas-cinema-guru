import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './movies.css';

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    const fetchUserLists = async () => {
      try {
        const [favoriteRes, watchLaterRes] = await Promise.all([
          axios.get('/api/titles/favorite'),
          axios.get('/api/titles/watchlater')
        ]);

        setIsFavorite(favoriteRes.data.includes(movie.imdbId));
        setIsWatchLater(watchLaterRes.data.includes(movie.imdbId));
      } catch (error) {
        console.error('Error fetching user lists:', error);
      }
    };

    fetchUserLists();
  }, [movie.imdbId]);

  const handleClick = async (type) => {
    try {
      if (type === 'favorite') {
        if (isFavorite) {
          await axios.delete(`/api/titles/favorite/${movie.imdbId}`);
        } else {
          await axios.post(`/api/titles/favorite/${movie.imdbId}`);
        }
        setIsFavorite(!isFavorite);
      } else if (type === 'watchlater') {
        if (isWatchLater) {
          await axios.delete(`/api/titles/watchlater/${movie.imdbId}`);
        } else {
          await axios.post(`/api/titles/watchlater/${movie.imdbId}`);
        }
        setIsWatchLater(!isWatchLater);
      }
    } catch (error) {
      console.error(`Error updating ${type} list:`, error);
    }
  };

  return (
    <li className="movie-card">
      <div className="icons">
        <FontAwesomeIcon 
          icon={faHeart} 
          className={`icon ${isFavorite ? 'favorite' : ''}`} 
          onClick={() => handleClick('favorite')} 
        />
        <FontAwesomeIcon 
          icon={faClock} 
          className={`icon ${isWatchLater ? 'watchlater' : ''}`} 
          onClick={() => handleClick('watchlater')} 
        />
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.synopsis}</p>
        <p>{movie.genres.join(', ')}</p>
      </div>
    </li>
  );
};

export default MovieCard;
