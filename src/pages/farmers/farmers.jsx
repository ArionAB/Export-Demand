import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getFirebase } from "../../firebase/firebase.utils";
import { Modal } from "../../components/Modal/modal";

import { Create } from "./create";

import Post from "./post";
import { useContext } from "react";
import { PostContext } from "../../Context/postContext";

import styles from "./farmers.styles.scss";

export const Farmers = () => {
  const { farmPosts } = useContext(PostContext);
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Farmer's Market</h1>
      <button onClick={() => setShow(true)}>Add your farm</button>
      <Modal onClose={() => setShow(false)} show={show} />
      <div className="container">
        {farmPosts
          ? farmPosts.map((farm, index) => (
              <div key={farm.id}>
                <Post farm={farm} />
              </div>
            ))
          : ""}
      </div>{" "}
    </>
  );
};

// const addOrEdit = (obj) => {
//   getFirebase()
//     .database()
//     .ref()
//     .child("posts")
//     .push(obj, (err) => {
//       if (err) console.log(err);
//     });
// };

/* { // <Link className="edit_link" to={`/edit/${farmPost.url}`}>
  //   Edit
    // </Link> } */

/*  <h1>Farmer's Market</h1>
      <div className="container">
        {farmPosts.map((farmPost) => (
          <section key={farmPost.url}>
            <h2>{farmPost.title}</h2>
            <button onClick={() => setShow(true)}>Edit Information</button>
            <Modal onClose={() => setShow(false)} show={show} />

            <img src={farmPost.image}></img>
            <h3>Products: {farmPost.product}</h3>
            <p>{farmPost.content}</p>
            <p>{farmPost.phone}</p>
            <p>{farmPost.email}</p>
          </section>
        ))}
      </div> */
// const addOrEdit = (obj) => {
//   getFirebase()
//     .database()
//     .ref()
//     .child("posts")
//     .push(obj, (err) => {
//       if (err) console.log(err);
//     });
// };
