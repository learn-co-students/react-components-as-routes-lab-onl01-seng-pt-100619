import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => (
        <div key={movie.title}>
          <h3>{movie.title}</h3>
          <h4>Time: {movie.time}</h4>
          Genres:
          {movie.genres.map((genre, index) => (
            <ul key={index}>{genre}</ul>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Movies;
