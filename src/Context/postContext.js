import { createContext } from "react";
import { getFirebase } from "../firebase/firebase.utils";
import { useState, useEffect } from "react";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

export const PostContext = createContext();

export const PostContextProvider = (props, { id }) => {
  const [farmPosts, setFarmPosts] = useState();
  const [currentUser, setCurrentUser] = useState();
  // const [id, setId] = useState("");
  console.log("POSTCONTEXT ID", props.id);
  /* useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.on("value", (snapShot) => {
          setCurrentUser({ key: snapShot.key, ...snapShot.val() });
        });
        // } else setCurrentUser(currentUser); not sure if this one or the one below is correct
      }
      if (setCurrentUser(userAuth)) {
        console.log("userAuth + key", userAuth.uid);
        //below line fixed my issue of getting an error if
        //i was trying to acces the app and i was not log out
      } else if (!userAuth && typeof window !== "undefined") {
        return null;
      }
      console.log("userAuth + key", userAuth.uid);
      // console.log("currentUser + key", currentUser.key);
      console.log("userAuth", userAuth); //User autehntication session persistence: if user refreshes page he is still logged in to firebase
      // console.log("userAuth + key", userAuth.uid); //User autehntication session persistence: if user refreshes page he is still logged in to firebase
       id = userAuth.uid;
      setId(id);
    });
    return unsubscribe;
  }, []); */

  useEffect(() => {
    getFirebase()
      .database()
      .ref("Users/")
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
