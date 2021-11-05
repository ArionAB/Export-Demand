import React from "react";
import { useState, useEffect } from "react";
import { FormInput } from "../form-input/form-input";
import { getFirebase } from "../../firebase/firebase.utils";
import { ModalForm } from "../Modal/modal-form";

import styles from "./modal.styles.scss";
import { Farmers } from "../../pages/farmers/farmers";

export const Modal = (props, match) => {
  // const [loading, setLoading] = useState(true);

  const [postList, setPostList] = useState();
  const [state, setState] = useState({
    title: "",
    url: "",
    image: "",
    product: "",
    content: "",
    phone: "",
    email: "",
  });

  getFirebase().database().ref();

  useEffect(() => {
    /*  const getPosts = async () => {
      const data = await getDocs();
    };

    getPosts(); */
    getFirebase()
      .database()
      .ref("posts")
      .on("value", (snapshot) => {
        const posts = snapshot.val();
        const state = [];
        for (let id in posts) {
          state.push({ id, ...posts[id] });
        }
        if (snapshot.val() != null) setState(state);
        console.log("POST LIST", state);
        console.log("snap", snapshot.val());
      });
  }, []);

  console.log("setState", setState);

  if (!props.show) {
    return null;
  }

  /*   if (loading) {
    return <h1>Loading...</h1>;
  } */
  console.log("just state:", state); //object with all data all posts i added

  console.log("state.content", state.content); //undefined
  console.log("state.title", state.title); //undefined

  return (
    <>
      <div className="modal">
        <h1>Update your information</h1>
        {state
          ? state.map((farm, index) => <ModalForm farm={farm} key={index} />)
          : ""}
      </div>
    </>
  );
};

{
  /*  const handleSubmit = async (event) => {
  event.preventDefault();

  console.log({ ...state });
  const newPost = {
    ...state,
  };
  getFirebase()
    .database()
    .ref()
    .child(`posts/`)
    .set(newPost)
    .then(() => history.push(`/farmers`));
};  */
}

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
