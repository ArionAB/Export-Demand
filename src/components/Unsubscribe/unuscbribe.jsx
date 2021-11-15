import React from "react";
import { useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import Post from "../../pages/farmers/post";

export const Unsuscribe = () => {
  const [currentUser, setCurrentUser] = useState();
  const [userId, setUserId] = useState("");
  // const id = useRef("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.on("value", (snapShot) => {
          setCurrentUser({ key: snapShot.key, ...snapShot.val() });
        });
        // } else setCurrentUser(currentUser); not sure if this one or the one below is correct
      }
      if (setCurrentUser(userAuth)) {
        // console.log("userAuth + key", userAuth.uid);
        //below line fixed my issue of getting an error if
        //i was trying to acces the app and i was not log out
      } else if (!userAuth && typeof window !== "undefined") {
        return null;
      }
      // console.log("userAuth + key", userAuth.uid);

      //User autehntication session persistence: if user refreshes page he is still logged in to firebase
      const uid = userAuth.uid;

      // setId(id); id = userAuth.uid;
      setUserId(uid);
    });

    return unsubscribe;
  }, []);
  return (
    <div>
      <Post userId={userId} />
    </div>
  );
};
