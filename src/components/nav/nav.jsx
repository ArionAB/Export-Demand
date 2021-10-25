import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import styles from "../nav/nav.styles.scss";

export function Nav() {
  return (
    <div className="nav">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/home">
          Home
        </Link>
        <Link className="option" to="/about">
          About Us
        </Link>
        <Link className="option" to="/industry">
          Industry
        </Link>
        <Link className="option" to="/project">
          The Project
        </Link>
        <Link className="option" to="/commerce">
          Commerce
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        <Link className="option" to="/signin">
          Sign In
        </Link>
      </div>
    </div>
  );
}
