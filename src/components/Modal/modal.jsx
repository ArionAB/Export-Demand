import React, { Children } from "react";
import { FormInput } from "../form-input/form-input";
import { useState, useEffect } from "react";
import { getFirebase } from "../../firebase/firebase.utils";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import styles from "./modal.styles.scss";

export const Modal = (props, { farm, id }) => {
  const [currentUser, setCurrentUser] = useState();

  console.log("NewId", props.id);
  console.log("farm-MODAL", props.farm);
  // const [id, setId] = useState("");

  // console.log(id);
  // let unsuscribeFromAuth = null;
  /*   console.log(id);
  console.log(onId); */
  // const [id, setId] = useState("");
  /*   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.on("value", (snapShot) => {
          setCurrentUser({ key: snapShot.key, ...snapShot.val() });
        });
        // } else setCurrentUser(currentUser); not sure if this one or the one below is correct
      } else setCurrentUser(userAuth);

      // console.log("currentUser + key", currentUser.key);
      console.log("userAuth", userAuth); //User autehntication session persistence: if user refreshes page he is still logged in to firebase
      // console.log("userAuth + key", userAuth.uid); //User autehntication session persistence: if user refreshes page he is still logged in to firebase
      // const id = userAuth.uid;
      // setId(id);
      // console.log(id);
    });
    return unsubscribe;
  }, []); */

  /*   useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.on("value", (snapShot) => {
          setCurrentUser({ key: snapShot.key, ...snapShot.val() });
        });
        // } else setCurrentUser(currentUser); not sure if this one or the one below is correct
      }
      if (setCurrentUser(userAuth)) {
        console.log("userAuth + key", userAuth.uid);
        //below line fixed my issue of getting an error if
        //i was trying to acces the app and i was not log out
      } else if (!userAuth && typeof window !== "undefined") {
        return null;
      }
      console.log("userAuth + key", userAuth.uid);
      // console.log("currentUser + key", currentUser.key);
      console.log("userAuth", userAuth); //User autehntication session persistence: if user refreshes page he is still logged in to firebase
      // console.log("userAuth + key", userAuth.uid); //User autehntication session persistence: if user refreshes page he is still logged in to firebase
      const id = userAuth.uid;
      setId(id);
    });
    return unsubscribe;
  }, []); */

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
    e.preventDefault();
    const obj = {
      ...values,
    };
    getFirebase()
      .database()
      .ref(`Users/`)
      // .ref(`Users/` + id)
      .push(obj, (err) => {
        if (err) console.log(err);
        // console.log("ID", id);
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
