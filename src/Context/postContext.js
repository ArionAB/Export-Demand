import { createContext } from "react";
import { getFirebase } from "../firebase/firebase.utils";
import { useState, useEffect } from "react";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

export const PostContext = createContext();

export const PostContextProvider = (props, { farm }) => {
  const [farmPosts, setFarmPosts] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [id, setId] = useState("");
  console.log("PostContextProvider", props.farm);
  /*  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.on("value", (snapShot) => {
          setCurrentUser({ key: snapShot.key, ...snapShot.val() });
        });
        // }
      }
      if (setCurrentUser(userAuth)) {
      } else if (!userAuth && typeof window !== "undefined") {
        return null;
      }
      const id = userAuth.uid;
      setId(id);
    });

    return unsubscribe;
  }, []); */

  useEffect(() => {
    getFirebase()
      .database()
      .ref(`Users/UserPost/`)
      // .ref(`Users/UserPost/`)
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
    <PostContext.Provider value={{ farmPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};
