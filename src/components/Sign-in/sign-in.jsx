import React from "react";
import { useState } from "react";
import { FormInput } from "../form-input/form-input";
import { getFirebase } from "../../firebase/firebase.utils";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import styles from "./sign-in.styles.scss";

export const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const logIn = () => {
    getFirebase()
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.error(error);
        alert(error.message);
      });
    setUser({
      email: "",
      password: "",
    }); //This will clear the form
  };

  const { email, password } = user;
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          required
          label="Password"
        />
        <div className="buttons">
          <button type="button" onClick={logIn} className="sign-btn">
            Sign In
          </button>
          <button
            type="button"
            onClick={signInWithGoogle}
            className="google-btn"
          >
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
};
