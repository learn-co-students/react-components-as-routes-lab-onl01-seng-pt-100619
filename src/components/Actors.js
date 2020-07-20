import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => renderActor(actor, index))}
    </div>
  );
};

const renderActor = (actor, index) => {
  return(
    <div key={index}>
      <h3><strong>Name: {actor.name}</strong></h3>
      <p>Movies:
        {renderActorMovies(actor)}
      </p>
    </div>
  )
}

const renderActorMovies = (actor) => {
  return(
    <ul>
      {actor.movies.map((movie, index) => <li key={index}>{movie}</li>)}
    </ul>
  )
}

export default Actors;
