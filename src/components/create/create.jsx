import React, { useState } from "react";
import { FormInput } from "../form-input/form-input";
import { getFirebase } from "../../firebase/firebase.utils";

export const Create = ({ history }) => {
  const [state, setState] = React.useState({
    title: "",
    url: "",
    image: "",
    product: "",
    content: "",
    phone: "",
    email: "",
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
  };

  const createPost = () => {
    console.log({ ...state });
    const newPost = {
      ...state,
    };
    getFirebase()
      .database()
      .ref()
      .child(`posts/${state.url}`)
      .set(newPost)
      .then(() => history.push("/farmers"));
  };

  return (
    <>
      <div className="create-post">
        <h1>Create new post</h1>
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
          <button onClick={createPost}>Submit</button>
        </form>
      </div>
    </>
  );
};
