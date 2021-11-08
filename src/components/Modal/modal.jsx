import React from "react";
import { FormInput } from "../form-input/form-input";
import { useState } from "react";
import { getFirebase } from "../../firebase/firebase.utils";

import styles from "./modal.styles.scss";

export const Modal = (props) => {
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
      .ref("posts")

      .push(obj, (err) => {
        if (err) console.log(err);
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

// {
//   /*  const handleSubmit = async (event) => {
//   event.preventDefault();

//   console.log({ ...state });
//   const newPost = {
//     ...state,
//   };
//   getFirebase()
//     .database()
//     .ref()
//     .child(`posts/`)
//     .set(newPost)
//     .then(() => history.push(`/farmers`));
// };  */
// }

// {Object.keys(state).map((id) => (

/*   useEffect(() => {
    getFirebase()
      .database()
      .ref()
      .child(`posts/`)
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setState({
            ...snapshot.val(),
          });
      });
  }, []); */
