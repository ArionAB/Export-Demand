import React from "react";
import { useState, useEffect } from "react";
import { FormInput } from "../../components/form-input/form-input";
import { getFirebase } from "../../firebase/firebase.utils";
import { createUserProfileDocument, auth } from "../../firebase/firebase.utils";

import styles from "./modal.styles.scss";

export default function Post({ farm }) {
  /*   console.log("farmid", farm.postKey);
  console.log("farm", farm); */
  const [currentUser, setCurrentUser] = useState();
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.on("value", (snapShot) => {
          setCurrentUser({ key: snapShot.key, ...snapShot.val() });
        });
      }
      if (setCurrentUser(userAuth)) {
        console.log("userAuth + key", userAuth.uid);
      } else if (!userAuth && typeof window !== "undefined") {
        return null;
      }
      console.log("userAuth + key", userAuth.uid);

      const id = userAuth.uid;

      setId(id);
    });

    return unsubscribe;
  }, []);
  console.log(id);
  const deletePost = () => {
    getFirebase().database().ref("posts").child(farm.id).remove();
  };

  const EditModal = (props) => {
    const initialFieldValues = {
      title: farm.title,
      image: farm.image,
      product: farm.product,
      content: farm.content,
      phone: farm.phone,
      email: farm.email,
    };
    const [values, setValues] = useState(initialFieldValues);

    function handleChange(e) {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    }

    const updatePost = (e) => {
      e.preventDefault();
      const obj = {
        ...values,
      };
      const postKey = farm.postKey;
      getFirebase()
        .database()
        // .ref(`Users/Posts/${id}/${postKey}/`)
        .ref(`Users/Posts/`)
        .child(`${id}`)
        .child(`${postKey}`)

        .update(obj, (err) => {
          if (err) console.log(err);
        });
    };

    if (!props.show) {
      return null;
    }

    return (
      <>
        <div className="modal">
          <h1>Update your information</h1>
          <form onSubmit={updatePost}>
            <FormInput
              id="title"
              label="Title"
              name="title"
              type="text"
              value={values.title}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Image"
              name="image"
              type="text"
              value={values.image}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Product"
              name="product"
              type="text"
              value={values.product}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Describe your products"
              name="content"
              type="text"
              value={values.content}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Phone"
              name="phone"
              type="number"
              value={values.phone}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              required
            />
            <button type="submit" value="Save">
              Update
            </button>
            <button onClick={props.onClose}>Close</button>
          </form>
        </div>
      </>
    );
  };

  return (
    <div id={farm.id}>
      <h2>{farm.title}</h2>
      <button onClick={() => setShow(true)}>Update your information</button>
      <EditModal farm={farm} onClose={() => setShow(false)} show={show} />
      <img src={farm.image}></img>
      <h3>Products: {farm.product}</h3>
      <p>{farm.content}</p>
      <p>{farm.phone}</p>
      <p>{farm.email}</p>
      <button id={farm.id} key={farm.id} onClick={deletePost}>
        Delete Post
      </button>
    </div>
  );
}
