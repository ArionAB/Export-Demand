import React, { Children } from "react";
import { FormInput } from "../form-input/form-input";
import { useState, useEffect } from "react";
import { getFirebase } from "../../firebase/firebase.utils";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./modal.styles.scss";

export const Modal = (props, { farm }) => {
  const [currentUser, setCurrentUser] = useState();
  const [id, setId] = useState("");
  // console.log("NewId", props.id);
  console.log(currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.on("value", (snapShot) => {
          setCurrentUser({ key: snapShot.key, ...snapShot.val() });
        });
        // }
      }
      if (setCurrentUser(userAuth)) {
      } else if (!userAuth && typeof window !== "undefined") {
        return null;
      }
      const id = userAuth.uid;
      setId(id);
    });

    return unsubscribe;
  }, []);

  const initialFieldValues = {
    title: "",
    image: "",
    product: "",
    content: "",
    phone: "",
    email: "",
  };

  const [values, setValues] = useState(initialFieldValues);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  const handleFormSubmit = (e) => {
    console.log("submit ID", props.id);
    e.preventDefault();
    const obj = {
      ...values,
    };
    getFirebase()
      .database()

      .ref(`Users/Posts/`)
      .child(`${id}`)
      .push(obj, (err) => {
        if (err) {
          console.log(err);
        } else
          toast.success("Added Succesfully", {
            position: "top-center",
          });
      });
  };

  if (!props.show) {
    return null;
  }
  return (
    <>
      <ToastContainer />
      <div className="modal">
        <h1>Add your farm</h1>
        <form onSubmit={handleFormSubmit}>
          <FormInput
            id="title"
            label="Title"
            name="title"
            type="text"
            handleChange={handleChange}
            value={values.title}
            required
          />
          <FormInput
            label="Image"
            name="image"
            type="text"
            handleChange={handleChange}
            value={values.image}
            required
          />
          <FormInput
            label="Product"
            name="product"
            type="text"
            handleChange={handleChange}
            value={values.product}
            required
          />
          <FormInput
            label="Describe your products"
            name="content"
            type="text"
            handleChange={handleChange}
            value={values.content}
            required
          />
          <FormInput
            label="Phone"
            name="phone"
            type="number"
            handleChange={handleChange}
            value={values.phone}
            required
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            handleChange={handleChange}
            value={values.email}
            required
          />
          <button type="submit" value="Save">
            Save
          </button>
          <button onClick={props.onClose}>Close</button>
        </form>
      </div>
    </>
  );
};
