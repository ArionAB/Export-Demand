import react from "react";
import { useState, useContext } from "react";
import { EditModal } from "./editModal";
import { PostContext } from "../../Context/postContext";
import { FormInput } from "../../components/form-input/form-input";
import styles from "./modal.styles.scss";

import { getFirebase } from "../../firebase/firebase.utils";

export default function Post({ farm }) {
  const [show, setShow] = useState(false);
  const deletePost = () => {
    getFirebase().database().ref("posts").child(farm.id).remove();
  };

  const editPost = () => {
    setShow(true);
    getFirebase().database().ref("posts").child(farm.id).update();
  };

  const EditModal = (props) => {
    const [title, setTitle] = useState(farm.title);
    const [image, setImage] = useState(farm.image);
    const [product, setProduct] = useState(farm.product);
    const [content, Contentset] = useState(farm.content);
    const [phone, setPhone] = useState(farm.phone);
    const [email, setEmail] = useState(farm.email);

    const { updatePost } = useContext(PostContext);
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
              value={title}
              required
            />
            <FormInput
              label="Image"
              name="image"
              type="text"
              value={image}
              required
            />
            <FormInput
              label="Product"
              name="product"
              type="text"
              value={product}
              required
            />
            <FormInput
              label="Describe your products"
              name="content"
              type="text"
              value={content}
              required
            />
            <FormInput
              label="Phone"
              name="phone"
              type="number"
              value={phone}
              required
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={email}
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

  console.log("FARM-ID", farm.id);
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
