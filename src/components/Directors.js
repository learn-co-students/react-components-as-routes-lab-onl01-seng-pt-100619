import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const renderDirectors = () => {
    return directors.map((director, index) => {
      return (
        <div key={index}>
          <h2>{director.name}</h2>
          <p>Movies:
            <ul>
            {director.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
              ))}
            </ul>
          </p>
          
          </div>
      )
    })
  }
  
  return (
    <div>
      <h1>
        Directors Page
      </h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
