import React from 'react';
import { directors } from '../data';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const Directors = () => {
  return (
    <div>
      <h1> Directors Page </h1>
      {directors.map((director, index) => {
        return(
          <div key={index}>
            <h4>{director.name}</h4>
            <ul>
              {director.movies.map((movie, index) => {
                return(
                  <li key={index}>{movie}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
