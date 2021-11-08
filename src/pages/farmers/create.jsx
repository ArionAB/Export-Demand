import React, { useState } from "react";
import { FormInput } from "../../components/form-input/form-input";
import { getFirebase } from "../../firebase/firebase.utils";
import { Farmers } from "./farmers";

export const Create = () => {
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

  return (
    <>
      <div className="create-post">
        <h1>Create new post</h1>
        {}
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
            id="url"
            label="Url"
            name="url"
            type="text"
            handleChange={handleChange}
            value={values.url}
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
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
