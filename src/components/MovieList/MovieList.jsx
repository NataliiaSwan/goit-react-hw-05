import React from "react";

import { Link, useLocation } from "react-router-dom";

import { getImageUrl } from "../../Api/Api";

import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  if (!movies.length) {
    return null;
  }

  return (
    <ul className={css.movieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.movieItem}>
          <Link
            key={movie.id}
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
          >
            <h3>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
