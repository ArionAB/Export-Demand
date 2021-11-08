import react from "react";
import { useState } from "react";
import { Modal } from "../../components/Modal/modal";
import { ModalForm } from "../../components/Modal/modal-form";
import { getFirebase } from "../../firebase/firebase.utils";

export default function Post({ farm }) {
  const [newTaskName, setNewTaskName] = useState("");
  const deletePost = () => {
    getFirebase().database().ref("posts").child(farm.id).remove();
  };

  const editPost = () => {
    setShow(true);
    getFirebase().database().ref("posts").child(farm.id).update({});
  };
  const [show, setShow] = useState(false);

  return (
    <div id={farm.id}>
      <h2>{farm.title}</h2>
      <button id={farm.id} key={farm.id} onClick={editPost}>
        Edit Information
      </button>

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
