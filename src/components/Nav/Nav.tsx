import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="favorites">Favorites</Link>
      <Link to="sign-in">Sign in</Link>
      <Link to="content">Content</Link>
    </nav>
  );
};
