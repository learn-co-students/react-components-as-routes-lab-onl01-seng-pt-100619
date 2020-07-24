import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {/* The <div> should contain the director's name and a <ul> with a list of their movies. */}
      {directors.map(director => 
        <div>
          <p>{director.name}</p>
          <ul>
            {director.movies.map(movie => <li>{movie}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Directors
