import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => renderDirector(director, index))}
    </div>
  );
}

const renderDirector = (director, index) => {
  return(
    <div key={index}>
      <h3><strong>Name: {director.name}</strong></h3>
      <p>Movies:
        {renderDirectorMovies(director)}
      </p>
    </div>    
  )
}

const renderDirectorMovies = (director) => {
  return(
    <ul>
      {director.movies.map((movie, index) => <li key={index}>{movie}</li>)}
    </ul>
  )
}

export default Directors
