import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "../nav/nav.styles.scss";

export const Nav = ({ currentUser }) => {
  const hamburger = <FontAwesomeIcon icon={faBars} />;
  const myContainer = useRef(null);

  function hamMenu() {
    const ham = myContainer.current;
    console.log(ham);
    if (ham.className === "nav") {
      ham.className += " responsive";
    } else {
      ham.className = "nav";
    }
  }

  return (
    <div className="nav">
      <Link className="logo-container" to="/">
        <img
          className="logo"
          src={require("../../images/OV-Logo-port-slider.jpg").default}
          alt="Logo"
        ></img>
      </Link>
      <div className="mobile">
        <div className="responsive" ref={myContainer}>
          <Link className="option" to="/">
            Home
          </Link>
          <Link className="option" to="/contact">
            Contact Us
          </Link>

          <Link className="option" to="/farmers">
            Farmers
          </Link>
          <Link className="option" to="/goals">
            Our Goals
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
        <a className="icon" onClick={hamMenu}>
          {hamburger}
        </a>
      </div>
    </div>
  );
};

//we need to import useHistory and it will work
// let history = useHistory();
// onClick={() => props.history.push("/farmers")}
