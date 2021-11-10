import React from "react";
import { useState } from "react";
import { FormInput } from "../form-input/form-input";
import { getFirebase } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";
import { createUserWithEmailandPassword } from "../../firebase/firebase.utils";

export const SignUp = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const register = () => {
    getFirebase()
      .auth()
      .createUserWithEmailandPassword(email, password)
      .catch(function (error) {
        console.error(error);
        alert(error.message);
      });
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
        <FormInput
          name="confirm_password"
          type="confirm_password"
          value={password}
          handleChange={handleChange}
          required
          label="Password"
        />
        <div className="buttons">
          <button onClick={register} className="sign-btn">
            Sign In
          </button>
          <button onClick={signInWithGoogle} className="google-btn">
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
};
