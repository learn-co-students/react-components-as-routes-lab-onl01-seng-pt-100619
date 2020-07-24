import React from 'react';
import { movies } from '../data';

const Movies = (props) => {
  return (
    <div>
      <h1>Movies Page</h1>
      {/* The <div> should contain the movie's title, time and a <ul> with a list of its genres. */}
      {movies.map(movie => 
        <div>
          <p>{movie.title}</p>
          <p>{movie.time}</p>
          <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>
        </div>)}
    </div>
  );
};

export default Movies;
