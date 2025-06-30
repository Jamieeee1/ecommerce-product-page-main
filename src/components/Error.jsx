import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <p>Page not found</p>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default Error;
