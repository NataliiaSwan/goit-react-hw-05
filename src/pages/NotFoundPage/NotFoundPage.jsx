import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={css.notFoundPage}>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
