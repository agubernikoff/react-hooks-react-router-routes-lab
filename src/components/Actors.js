import React from "react";
import { actors } from "../data";

function Actors() {
  const mapa = actors.map((a) => (
    <div key={a.name}>
      {a.name}
      <ul>
        {a.movies.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Actors Page</h1>
      {mapa}
    </div>
  );
}

export default Actors;
