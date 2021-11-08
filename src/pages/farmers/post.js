import react from "react";
import { useState } from "react";
import { EditModal } from "../../components/Modal/editModal";

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
  console.log("FARM-ID", farm.id);
  return (
    <div id={farm.id}>
      <h2>{farm.title}</h2>
      <button onClick={() => setShow(true)}>Update your information</button>
      <EditModal thePost={farm} onClose={() => setShow(false)} show={show} />

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
