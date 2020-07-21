import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className="actor">
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index}>
          <h5>Name: {actor.name}</h5>
          <h5>Movies:</h5>
          <ul>
            {actor.movies.map((movie, index)=> (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
 }


export default Actors;
