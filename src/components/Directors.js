import React from "react";
import { directors } from "../data";

function Directors() {
  const mapd = directors.map((d) => (
    <div key={d.name}>
      {d.name}
      <ul>
        {d.movies.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Directors Page</h1>
      {mapd}
    </div>
  );
}

export default Directors;
