import React, { useState, useEffect } from "react";
import {
  useParams,
  Link,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { fetchMovieDetails, getImageUrl } from "../../Api/Api";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieData = await fetchMovieDetails(movieId);
      setMovie(movieData);
    };

    getMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from);
    } else {
      navigate("/");
    }
  };

  if (!movie) {
    return <p>Loading...</p>;
  }
  const userScore = (movie.vote_average * 10).toFixed(0);

  return (
    <div className={css.movieDetailsPage}>
      <button className={css.button} onClick={handleGoBack}>
        Go back
      </button>
      <div className={css.movieDetailsBox}>
        <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
        <div className={css.box}>
          <h1>{movie.title}</h1>
          <p>User Score: {userScore}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <p>Genres: {movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <h3>Additional information</h3>
      <ul className={css.listDetails}>
        <li>
          <Link
            to={{
              pathname: `/movies/${movieId}/cast`,
              state: { from: location.state ? location.state.from : "/" },
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: `/movies/${movieId}/reviews`,
              state: { from: location.state ? location.state.from : "/" },
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
