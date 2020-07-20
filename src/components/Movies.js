import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>

        { movies.map((movie, index) => renderMovie(movie, index)) }
    </div>
  );
};

const renderMovie = (movie, index) => (
  <div key={index}>
    <h3><strong>Name: {movie.title}</strong></h3>
    <p>Time: {movie.time}</p>
    <p>Genres:
      {renderMovieGenres(movie)}
    </p>
  </div>
)

const renderMovieGenres = (movie) => {
  return(
    <ul>
      {movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}
    </ul>
  )  
}

export default Movies;
