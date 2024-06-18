import React from "react";

import { Link } from "react-router-dom";

import { getImageUrl } from "../../Api/Api";

import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  if (!movies.length) {
    return;
  }

  return (
    <ul className={css.movieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.movieItem}>
          <Link to={`/movies/${movie.id}`}>
            <h3>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
