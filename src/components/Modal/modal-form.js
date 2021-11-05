import React from "react";
import { useState } from "react";
import { getFirebase } from "../../firebase/firebase.utils";
import { FormInput } from "../form-input/form-input";
import { Farmers } from "../../pages/farmers/farmers";

export function ModalForm({ farm, id }) {
  console.log(farm);
  console.log("FARM-TITLE", farm.title);
  console.log("FARM-ID", farm.id);

  return (
    <form key={farm.id}>
      <FormInput
        id="title"
        label="Title"
        name="title"
        type="text"
        defaultValue={farm.title}
        required
      />

      <FormInput
        label="Image"
        name="image"
        type="text"
        defaultValue={farm.image}
        required
      />
      <FormInput
        label="Product"
        name="product"
        type="text"
        defaultValue={farm.product}
        required
      />
      <FormInput
        label="Describe your products"
        name="content"
        type="text"
        defaultValue={farm.content}
        required
      />
      <FormInput
        label="Phone"
        name="phone"
        type="number"
        defaultValue={farm.phone}
        required
      />
      <FormInput
        label="Email"
        name="email"
        type="email"
        defaultValue={farm.email}
        required
      />
      <button>Save</button>
      <button>Close</button>
    </form>
  );
}
