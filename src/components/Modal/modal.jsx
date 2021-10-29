import React from "react";
import { useState, useEffect } from "react";
import { FormInput } from "../form-input/form-input";
import { getFirebase } from "../../firebase/firebase.utils";
import { useParams } from "react-router-dom";

import styles from "./modal.styles.scss";

export const Modal = (props, history) => {
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrrentPost] = useState({});
  const { url } = useParams();

  useEffect(() => {
    getFirebase()
      .database()
      .ref()
      .child(`posts/`)
      .once("value")
      .then((snapshot) => {
        if (snapshot.val()) {
          setCurrrentPost(snapshot.val());
        }
        setLoading(false);
      });
  }, []);

  const [state, setState] = useState({
    title: currentPost.title,
    url: currentPost.url,
    image: currentPost.image,
    product: currentPost.product,
    content: currentPost.content,
    phone: currentPost.phone,
    email: currentPost.email,
  });

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log({ ...state });
    const newPost = {
      ...state,
    };
    getFirebase()
      .database()
      .ref()
      .child(`posts/`)
      .set(newPost)
      .then(() => history.push(`/farmers`));
  };
  if (!props.show) {
    return null;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="modal">
        <h1>Update your information</h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            id="title"
            label="Title"
            name="title"
            type="text"
            handleChange={handleChange}
            value={state.title}
            required
          />
          <FormInput
            id="url"
            label="Url"
            name="url"
            type="text"
            handleChange={handleChange}
            value={state.url}
            required
          />
          <FormInput
            label="Image"
            name="image"
            type="text"
            handleChange={handleChange}
            value={state.image}
            required
          />
          <FormInput
            label="Product"
            name="product"
            type="text"
            handleChange={handleChange}
            value={state.product}
            required
          />
          <FormInput
            label="Describe your products"
            name="content"
            type="text"
            handleChange={handleChange}
            value={state.content}
            required
          />
          <FormInput
            label="Phone"
            name="phone"
            type="number"
            handleChange={handleChange}
            value={state.phone}
            required
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            handleChange={handleChange}
            value={state.email}
            required
          />
          <button onSubmit={handleSubmit}>Save</button>
          <button onClick={props.onClose}>Close</button>
        </form>
      </div>
    </>
  );
};
