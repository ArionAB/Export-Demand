import React from "react";
import { Link } from "react-router-dom";
import { farmers } from "../farmers/farmers";
import { withRouter } from "react-router";

import styles from "../nav/nav.styles.scss";
export const Nav = () => {
  return (
    <div className="nav">
      <Link className="logo-container" to="/">
        <img src={require("../../images/logo.jpg").default} alt="Logo"></img>
      </Link>
      <div className="options">
        <Link className="option" to="/">
          Home
        </Link>
        <Link className="option" to="/about">
          About Us
        </Link>

        <Link className="option" to="/farmers">
          Farmers
        </Link>
        <Link className="option" to="/project">
          Our Goal
        </Link>
        <Link className="option" to="/commerce">
          Organic
        </Link>

        <Link className="option" to="/signin">
          Sign In
        </Link>
      </div>
    </div>
  );
};

//we need to import useHistory and it will work
// let history = useHistory();
// onClick={() => props.history.push("/farmers")}
