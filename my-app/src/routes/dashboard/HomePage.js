import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/Button'; 

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  const loadMovies = (page) => {
    axios.get('/api/titles/advancedsearch', {
      params: {
        minYear,
        maxYear,
        genres: genres.join(','),
        title,
        sort,
        page
      }
    }).then(response => {
      if (page === 1) {
        setMovies(response.data);
      } else {
        setMovies(prevMovies => [...prevMovies, ...response.data]);
      }
    }).catch(error => {
      console.error('There was an error loading the movies!', error);
    });
  };

  useEffect(() => {
    loadMovies(1);
  }, [minYear, maxYear, genres, sort, title]);

  return (
    <div className="homepage-container">
      <Filter 
        minYear={minYear} 
        setMinYear={setMinYear} 
        maxYear={maxYear} 
        setMaxYear={setMaxYear} 
        sort={sort} 
        setSort={setSort} 
        genres={genres} 
        setGenres={setGenres} 
        title={title} 
        setTitle={setTitle} 
      />
      <ul className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </ul>
      <Button onClick={() => loadMovies(page + 1)}>Load More...</Button>
    </div>
  );
};

export default HomePage;
