import React from "react";
import Movie from "./Movie";

function MovieList() {
  // movie list with names and ids
  const movieList = [
    {
      name: "Movie 1",
    },
    {
      name: "Movie 2",
    },
    {
      name: "Movie 3",
    },
  ];
  // using map to render a list of items in React
  // use separate component for each item
  const movieData = movieList.map((movie, index) => <Movie key={index} movie={movie} />);
  return (
    <div>
      <h2>
        List Rendering Demo using Nested Component With <strong>Key as Index</strong>
      </h2>

      {movieData}
    </div>
  );
}

export default MovieList;
