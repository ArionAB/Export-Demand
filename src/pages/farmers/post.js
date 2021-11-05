import react from "react";
import { useState } from "react";
import { Modal } from "../../components/Modal/modal";
import { ModalForm } from "../../components/Modal/modal-form";
import { getFirebase } from "../../firebase/firebase.utils";

export default function Post({ farm }) {
  const deletePost = () => {
    getFirebase().database().ref("posts").child(farm.id).remove();
  };

  const editPost = () => {
    setShow(true);
    getFirebase().database().ref("posts").child(farm.id);
    console.log(farm);
  };
  const [show, setShow] = useState(false);
  return (
    <div key={farm.id} id={farm.id}>
      <h2>{farm.title}</h2>
      <button id={farm.id} key={farm.id} onClick={editPost}>
        Edit Information
      </button>
      <Modal onClose={() => setShow(false)} show={show} />

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
