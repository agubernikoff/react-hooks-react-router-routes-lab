import React from "react";
import { movies } from "../data";

function Movies() {
  const mapmovies = movies.map((movie) => (
    <div key={movie.title}>
      {movie.title}
      {movie.time.toString()}
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Movies Page</h1>
      {mapmovies}
    </div>
  );
}

export default Movies;
