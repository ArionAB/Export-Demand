import React from "react";
import { Link } from "react-router-dom";
import { farmers } from "../../pages/farmers/farmers";
import { auth } from "../../firebase/firebase.utils";

import styles from "../nav/nav.styles.scss";
export const Nav = ({ currentUser }) => {
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
        <Link className="option" to="/goals">
          Our Goals
        </Link>
        <Link className="option" to="/commerce">
          Organic
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

//we need to import useHistory and it will work
// let history = useHistory();
// onClick={() => props.history.push("/farmers")}
