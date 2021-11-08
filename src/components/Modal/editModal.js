import React from "react";
import { FormInput } from "../form-input/form-input";
import { useState, useContext } from "react";
import { getFirebase } from "../../firebase/firebase.utils";
import { PostContext } from "../../Context/postContext";

import styles from "./modal.styles.scss";

export const EditModal = (props, { thePost, farm }) => {
  //   const id = thePost.id; undefined
  console.log(farm.id);
  /*  const [state, setState] = useState({
    title: farm.state,
    image: farm.state,
    product: farm.state,
    content: farm.state,
    phone: farm.state,
    email: farm.state,
  });
  console.log("farm.state", farm.state); */

  /* const [title, setTitle] = useState(thePost.title);
  const [image, setImage] = useState(thePost.image);
  const [product, setProduct] = useState(thePost.product);
  const [content, Contentset] = useState(thePost.content);
  const [phone, setPhone] = useState(thePost.phone);
  const [email, setEmail] = useState(thePost.email);

  const { updatePost } = useContext(PostContext); */

  if (!props.show) {
    return null;
  }
  return (
    <>
      <div className="modal">
        <h1>Update your information</h1>
        <form>
          <FormInput
            id="title"
            label="Title"
            name="title"
            type="text"
            required
          />
          <FormInput label="Image" name="image" type="text" required />
          <FormInput label="Product" name="product" type="text" va required />
          <FormInput
            label="Describe your products"
            name="content"
            type="text"
            va
            required
          />
          <FormInput label="Phone" name="phone" type="number" required />
          <FormInput label="Email" name="email" type="email" required />
          <button type="submit" value="Save">
            Save
          </button>
          <button onClick={props.onClose}>Close</button>
        </form>
      </div>
    </>
  );
};
