import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesList = movies.map(movie =>
    <div>
      Title: {movie.title}
      Time: {movie.time}
      <ul>
        {movie.genres.map(genre=> <li>{genre}</li>)}
      </ul>
    </div>
  )
  return (
    <div>
        <h1>
          Movies Page
        </h1>
        {moviesList}
    </div>
  )
};

export default Movies;
