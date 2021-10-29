import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFirebase } from "../../firebase/firebase.utils";

import styles from "./farmers.styles.scss";

export const Farmers = () => {
  const [loading, setLoading] = useState(true);
  const [farmPosts, setFarmPosts] = useState([]);

  useEffect(() => {
    if (loading && !farmPosts.length) {
      getFirebase()
        .database()
        .ref("/posts")
        .orderByChild("dateFormatted")
        .once("value")
        .then((snapshot) => {
          let posts = [];
          const snapshotVal = snapshot.val();
          for (let url in snapshotVal) {
            posts.push(snapshotVal[url]);
          }
          const newestFirst = posts.reverse();
          setFarmPosts(newestFirst);
          setLoading(false);
        });
    }
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Farmer's Market</h1>
      <div className="container">
        {farmPosts.map((farmPost) => (
          <section key={farmPost.url}>
            <h2>{farmPost.title}</h2>
            <Link className="edit_link" to={`/edit/${farmPost.url}`}>
              Edit
            </Link>
            <img src={farmPost.image}></img>
            <h3>Products: {farmPost.product}</h3>
            <p>{farmPost.content}</p>
            <p>{farmPost.phone}</p>
            <p>{farmPost.email}</p>
          </section>
        ))}
      </div>
    </>
  );
};
