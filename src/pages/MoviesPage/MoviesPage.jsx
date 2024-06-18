import { useState, useEffect } from "react";

import MovieList from "../../components/MovieList/MovieList";

import { searchMovies } from "../../Api/Api";

import css from "./MoviePage.module.css";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const searchResults = await searchMovies(query);
    setMovies(searchResults);
  };

  return (
    <div className={css.moviesPage}>
      <form className={css.searchForm} onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
