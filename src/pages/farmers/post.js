import react from "react";
import { useState } from "react";
import { Modal } from "../../components/Modal/modal";
import { getFirebase } from "../../firebase/firebase.utils";

export default function Post({ farm }) {
  const deletePost = () => {
    getFirebase().database().ref("posts").child(farm.id).remove();
  };

  const editPost = () => {
    getFirebase().database().ref("posts").child(farm.id);
  };
  console.log(farm);
  const [show, setShow] = useState(false);
  return (
    <div>
      <h2>{farm.title}</h2>
      <button
        onClick={function () {
          setShow(true);
        }}
      >
        {" "}
        Edit Information
      </button>
      <Modal onClose={() => setShow(false)} show={show} />

      <img src={farm.image}></img>
      <h3>Products: {farm.product}</h3>
      <p>{farm.content}</p>
      <p>{farm.phone}</p>
      <p>{farm.email}</p>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}
