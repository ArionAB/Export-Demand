import React, { useState } from "react";
import { Link } from "react-router-dom";

import { getFirebase } from "../../firebase/firebase.utils";

export const Farmers = () => {
  const [loading, setLoading] = useState(true);
  const [farmPosts, setFarmPosts] = useState([]);

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
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Farmer's Market</h1>
      {farmPosts.map((farmPost) => (
        <section key={farmPost.url}>
          <img src={farmPost.image}></img>
          <h2>{farmPost.title}</h2>
          <h3>{farmPost.product}</h3>
          <p>{farmPost.content}</p>
          <p>{farmPost.phone}</p>
          <p>{farmPost.email}</p>
        </section>
      ))}
    </>
  );
};
