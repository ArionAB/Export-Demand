import React from "react";
import { useState, useEffect } from "react";
import { FormInput } from "../form-input/form-input";
import { getFirebase } from "../../firebase/firebase.utils";
import {
  signInWithGoogle,
  onAuthStateChanged,
} from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./sign-in.styles.scss";

export const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const history = useHistory();
  auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      history.push("/");

      return null;
    }
  });

  const { email, password } = user;
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters", {
        position: "top-center",
      });
    }

    getFirebase()
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        toast.error(error.message, {
          position: "top-center",
        });
        if (!email) {
          toast.error("Email Required", {
            position: "top-center",
          });
        }

        console.error(error);
      });

    setUser({
      email: "",
      password: "",
    }); //This will clear the form
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="sign-in">
      <ToastContainer />
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
          <button type="submit" className="sign-btn">
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
