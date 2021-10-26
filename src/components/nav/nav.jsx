import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import { farmers } from "../../pages/farmers/farmers";
import { withRouter } from "react-router";

import styles from "../nav/nav.styles.scss";

export const Nav = (props) => {
  console.log(props);
  return (
    <div className="nav">
      <Link className="logo-container" to="/">
        <img src={require("../../images/logo.jpg").default} alt="Logo"></img>
      </Link>
      <div className="options">
        <Link className="option" to="/home">
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

// onClick={() => props.history.push("/farmers")}
