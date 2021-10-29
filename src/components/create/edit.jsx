import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getFirebase } from "../../firebase/firebase.utils";
import { FormInput } from "../form-input/form-input";

export const Edit = ({ history, match }) => {
  const [loading, setLoading] = useState(true);
  const [farmPosts, setFarmPosts] = useState([]);
  const [url, setUrl] = useState(match.params.slug);
  const [state, setState] = React.useState({
    title: farmPosts.title,
    url: farmPosts.url,
    image: farmPosts.image,
    product: farmPosts.product,
    content: farmPosts.content,
    phone: farmPosts.phone,
    email: farmPosts.email,
  });

  useEffect(() => {
    getFirebase()
      .database()
      .ref()
      .child(`posts/${state.url}`)
      .once("value")
      .then((snapshot) => {
        if (snapshot.val()) {
          setFarmPosts(snapshot.val());
        }
        setLoading(false);
      });
  }, []);

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
  };

  return (
    <>
      <div className="create-post">
        <h1>Edit information</h1>
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
          <button onSubmit={Edit}>Save</button>
        </form>
      </div>
    </>
  );
};
