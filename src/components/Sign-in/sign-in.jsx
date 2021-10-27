import React from "react";
import { useState } from "react";
import { FormInput } from "../form-input/form-input";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import styles from "./sign-in.styles.scss";

export const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });

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

        <button type="Submit">Submit Form</button>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </form>
    </div>
  );
};
