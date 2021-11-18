import React from "react";
import { Link } from "react-router-dom";

export const noMatch = () => {
  return (
    <div className="noMatch">
      <h1>404 PAGE NOT FOUND</h1>
      <Link to="/">Let's take you home, click me!</Link>
    </div>
  );
};
