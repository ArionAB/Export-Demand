/* import react from "react";
import styles from "./delete.styles.scss";
import { getFirebase } from "../../firebase/firebase.utils";
import { useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

export const DeleteModal = (props, { farm }) => {
  const [currentUser, setCurrentUser] = useState();
  const [id, setId] = useState("");
  console.log(props.farm);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.on("value", (snapShot) => {
          setCurrentUser({ key: snapShot.key, ...snapShot.val() });
        });
      }
      if (setCurrentUser(userAuth)) {
      } else if (!userAuth && typeof window !== "undefined") {
        return null;
      }

      const uid = userAuth.uid;

      setId(uid);
    });

    return unsubscribe;
  }, []);

  if (!props.confirm) {
    return null;
  }

  /* const postKey = props.farm.postKey;
  console.log(postKey);
  const DeletePost = () => {
    getFirebase()
      .database()
      .ref(`Users/Posts/`)
      .child(`${id}`)

      .remove();
  };

  return (
    <div className="delete-modal">
      <h1>Are you sure you want to delete?</h1>
      <div>
        <button>Delete</button>
        <button onClick={props.onClose}>Cancel</button>
      </div>
    </div>
  );
}; */
