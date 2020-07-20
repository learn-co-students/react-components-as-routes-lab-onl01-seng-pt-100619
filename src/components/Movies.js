import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
  const renderMovies = () => {
    return movies.map((movie, index) => {
      return (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>{movie.time} mins</p>
          <p>Genres:
            <ul>
            {movie.genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
              ))}
            </ul>
          </p>
          
          </div>
      )
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
