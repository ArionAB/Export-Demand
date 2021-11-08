import { createContext } from "react";
import { getFirebase } from "../firebase/firebase.utils";
import { useState, useEffect } from "react";

export const PostContext = createContext();

export const PostContextProvider = (props) => {
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

  const addPost = (id, title, image, product, content, phone, email) => {
    setFarmPosts({ id, title, image, product, content, phone, email });
  };

  return (
    <PostContext.Provider value={{ farmPosts, addPost }}>
      {props.children}
    </PostContext.Provider>
  );
};
