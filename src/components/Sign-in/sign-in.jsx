import React from "react";
import { useState } from "react";

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
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          required
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
        />{" "}
        <label>Password</label>
      </form>
    </div>
  );
};
