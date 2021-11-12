import React, { Children } from "react";
import { FormInput } from "../form-input/form-input";
import { useState, useEffect } from "react";
import { getFirebase } from "../../firebase/firebase.utils";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import styles from "./modal.styles.scss";

export const Modal = (props, { farm, id }) => {
  const [currentUser, setCurrentUser] = useState();

  console.log("NewId", props.id);

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
      .ref(`Users/${props.id}`)
      // .ref(`Users/${newId}`)

      .push(obj, (err) => {
        if (err) console.log(err);
        console.log("ID", props.id);
      });
  };

  if (!props.show) {
    return null;
  }
  return (
    <>
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
