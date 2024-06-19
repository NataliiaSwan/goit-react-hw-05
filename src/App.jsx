import React, { Suspense } from "react";

import { Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));

const MoviesPage = React.lazy(() => import("./pages/MoviesPage/MoviesPage"));

const MovieDetailsPage = React.lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);

const NotFoundPage = React.lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage")
);

const Navigation = React.lazy(() =>
  import("./components/Navigation/Navigation")
);

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
