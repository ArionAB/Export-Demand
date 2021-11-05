import React from "react";
import { useState } from "react";
import { getFirebase } from "../../firebase/firebase.utils";
import { FormInput } from "../form-input/form-input";

export function ModalForm({ farm, props }) {
  console.log(farm);

  return (
    <form>
      <FormInput
        id="title"
        label="Title"
        name="title"
        type="text"
        value={farm.title}
        required
      />
      <FormInput
        id="url"
        label="Url"
        name="url"
        type="text"
        value={farm.url}
        required
      />
      <FormInput
        label="Image"
        name="image"
        type="text"
        value={farm.image}
        required
      />
      <FormInput
        label="Product"
        name="product"
        type="text"
        value={farm.product}
        required
      />
      <FormInput
        label="Describe your products"
        name="content"
        type="text"
        value={farm.content}
        required
      />
      <FormInput
        label="Phone"
        name="phone"
        type="number"
        value={farm.phone}
        required
      />
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={farm.email}
        required
      />
      <button>Save</button>
      <button>Close</button>
    </form>
  );
}
