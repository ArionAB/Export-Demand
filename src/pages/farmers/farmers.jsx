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
      .orederByChild("dateFormatted")
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
};
