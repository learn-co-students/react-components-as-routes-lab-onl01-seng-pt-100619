import React from 'react';
import { movies } from '../data';
import { render } from 'enzyme';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => {
          return(
            <div key={index}>
              <h4>{movie.title} - {movie.time} minutes</h4>
              <ul>
                {movie.genres.map((genre, index) => (<li key={index}>{genre}</li>))}
              </ul>
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
