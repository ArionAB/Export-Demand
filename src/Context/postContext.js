import { createContext } from "react";
import { getFirebase } from "../firebase/firebase.utils";
import { useState, useEffect } from "react";
import {
  auth,
  createUserProfileDocument,
  FirebaseAuth,
} from "../firebase/firebase.utils";
import Post from "../pages/farmers/post";
import { isCompositeComponent } from "react-dom/test-utils";

export const PostContext = createContext();

export const PostContextProvider = (props, { farm }) => {
  const [farmPosts, setFarmPosts] = useState([]);

  let posts = [];

  useEffect(() => {
    getFirebase()
      .database()
      .ref(`Users/Posts/`)
      .on("value", (snapshot) => {
        snapshot.forEach((userData) => {
          const userId = userData.key;

          userData.forEach((postData) => {
            // console.log("POST-DATA", postData.val());
            const postKey = postData.key;
            const content = postData.child("content").val();
            const email = postData.child("email").val();
            const image = postData.child("image").val();
            const phone = postData.child("phone").val();
            const product = postData.child("product").val();
            const title = postData.child("title").val();

            const post = {
              postKey,
              content,
              email,
              image,
              phone,
              product,
              title,
            };
            posts.push(post);
            setFarmPosts(posts);
            // console.log(farmPosts);
          });
        });
      });
  }, []);

  return (
    <>
      <PostContext.Provider value={{ farmPosts }}>
        {props.children}
      </PostContext.Provider>
    </>
  );
};
