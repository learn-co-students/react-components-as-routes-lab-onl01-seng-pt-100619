import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
  const mapMovies = () => {
    return movies.map(movie => {
      return (
        <div>
          <p>{movie.title}</p>
          <p>{movie.time}</p>
          <ul>
            {movie.genres.map(genre => {
              return(
                <li>{genre}</li>
              )
            })}
          </ul>
        </div>
      )
    })
  }
  

  return (
    <div>
        <h1>Movies Page</h1>
       {mapMovies()}
    </div>
  );
};

export default Movies;
