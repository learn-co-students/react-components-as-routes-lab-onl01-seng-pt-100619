import React from "react";
import { actors } from "../data";

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <div key={actor.name}>
          <h3>{actor.name}</h3>
          {actor.movies.map((movie, index) => (
            <ul key={index}>{movie}</ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Actors;
