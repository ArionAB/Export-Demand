import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFirebase } from "../../firebase/firebase.utils";
import { Modal } from "../../components/Modal/modal";
import { Create } from "./create";

import styles from "./farmers.styles.scss";
import Post from "./post";

export const Farmers = () => {
  const [farmPosts, setFarmPosts] = useState();

  useEffect(() => {
    getFirebase()
      .database()
      .ref("posts")
      .on("value", (snapshot) => {
        const posts = snapshot.val();
        const farmPosts = [];
        for (let id in posts) {
          farmPosts.push({ id, ...posts[id] });
        }
        if (snapshot.val() != null) setFarmPosts(farmPosts);
        console.log("POST LIST", farmPosts);
        console.log("snap", snapshot.val());
      });
  }, []);
  return (
    <>
      <h1>Farmer's Market</h1>
      <div className="container">
        {farmPosts
          ? farmPosts.map((farm, index) => <Post farm={farm} key={index} />)
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
