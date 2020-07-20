import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const renderActors = () => {
    return actors.map((actor, index) => {
      return (
        <div key={index}>
          <h2>{actor.name}</h2>
          <p>Movies:
            <ul>
            {actor.movies.map((movie, index) => (
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
        Actors Page
      </h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
