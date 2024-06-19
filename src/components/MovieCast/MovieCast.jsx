import { fetchMovieCredits, getImageUrl } from "../../Api/Api";

import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const handleGoBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from);
    } else {
      navigate("/movies");
    }
  };

  useEffect(() => {
    const getCast = async () => {
      try {
        const castData = await fetchMovieCredits(movieId);
        setCast(castData);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
        setCast([]);
      }
    };

    getCast();
  }, [movieId]);

  if (cast.length === 0) {
    return <p>No cast information available.</p>;
  }

  return (
    <div>
      <ul className={css.castList}>
        {cast.map((actor) => (
          <li key={actor.id} className={css.castItem}>
            <img
              src={getImageUrl(actor.profile_path)}
              alt={actor.name}
              className={css.castImage}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
