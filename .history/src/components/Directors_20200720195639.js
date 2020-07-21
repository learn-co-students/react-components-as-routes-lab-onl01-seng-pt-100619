import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h5>Name: {director.name}</h5>
          <h5>Movies:</h5>
          <ul>
            {director.movies.map((director, index)=> (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
 }

    


export default Directors
