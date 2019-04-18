import React, { SFC } from 'react';
import { Link } from "react-router-dom";

const NoMatch: SFC = () => {
  return (
    <div>
      <h3>404 Page not found</h3>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default NoMatch;
