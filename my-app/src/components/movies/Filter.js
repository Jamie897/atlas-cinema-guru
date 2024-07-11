import React from 'react';
import './movies.css';
import Tag from './Tag';

const Filter = ({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) => {
  const genresList = ["action", "drama", "comedy", "biography", "romance", "thriller", "war", "history", "sport", "sci-fi", "documentary", "crime", "fantasy"];

  return (
    <div className="filter-container">
      <input 
        className="filter-input" 
        type="text" 
        placeholder="Search by title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        className="filter-input" 
        type="number" 
        placeholder="Min Year" 
        value={minYear} 
        onChange={(e) => setMinYear(e.target.value)} 
      />
      <input 
        className="filter-input" 
        type="number" 
        placeholder="Max Year" 
        value={maxYear} 
        onChange={(e) => setMaxYear(e.target.value)} 
      />
      <select 
        className="filter-select" 
        value={sort} 
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="highestrated">Highest Rated</option>
        <option value="lowestrated">Lowest Rated</option>
      </select>
      <ul className="genres-list">
        {genresList.map((genre) => (
          <Tag 
            key={genre} 
            genre={genre} 
            filter={true} 
            genres={genres} 
            setGenres={setGenres} 
          />
        ))}
      </ul>
    </div>
  );
};

export default Filter;
