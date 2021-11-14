import { createContext } from "react";
import { getFirebase } from "../firebase/firebase.utils";
import { useState, useEffect } from "react";
import {
  auth,
  createUserProfileDocument,
  FirebaseAuth,
} from "../firebase/firebase.utils";
import Post from "../pages/farmers/post";

export const PostContext = createContext();

export const PostContextProvider = (props, { farm }) => {
  const [farmPosts, setFarmPosts] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [id, setId] = useState("");
  console.log("PostContextProvider", props.farm);
  useEffect(() => {
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
  }, []);

  /*    .addValueEventListener(new ValueEventListener(){
        public void: onDataChange(DataSnapshot, dataSnapshot) {
             for (DataSnapshot snapshot: dataSnapshot.getChildren()) {
                 for (DataSnapshot messageSnapshot: snapshot.child("mensagem").getChildren()) {
                     listView.add(messageSnapshot.child("textoMensagem").getValue().toString());
                 }
             }
        } */

  // .child("eqTv4wFi7fZXAIx3fH4JgaEKzGq2")
  useEffect(() => {
    getFirebase()
      .database()
      .ref(`Users/Posts/`)
      .on("value", (snapshot) => {
        snapshot.forEach((userData) => {
          console.log("Userdata", userData);
          const userId = userData.key;
          console.log("userId", userId);
          userData.forEach((postData) => {
            const postKey = postData.key;
            const content = postData.child("content").val();
            const email = postData.child("email").val();
            const image = postData.child("image").val();
            const phone = postData.child("phone").val();
            const product = postData.child("product").val();
            const title = postData.child("title").val();
            console.log(title);
            const DataPost = {
              postKey,
              content,
              email,
              image,
              phone,
              product,
              title,
            };
            console.log("DataPost", DataPost);
            const posts = snapshot.val(); //snapshot.val()
            const farmPosts = [];

            farmPosts.push({ ...DataPost });

            if (snapshot.val() != null) setFarmPosts(farmPosts);
            <>
              <Post posts={posts} />
            </>;
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

/* useEffect(() => {
  getFirebase()
    .database()
    .ref(`Users/Posts/${id}`)
    // .ref(`Users/UserPost/`)
    .on("child_added", (snapshot, prevChildKey) => {
      const posts = snapshot.val();
      const farmPosts = [];
      for (let id in posts) {
        farmPosts.push({ id, ...posts[id] });
      }
      if (snapshot.val() != null) setFarmPosts(farmPosts);
      console.log("Previous Post ID: " + prevChildKey);
      console.log("POST LIST", farmPosts);
      console.log("snap", snapshot.val());
    });
}, []); */

// This with CHILD ADDED CAN BE USED TO RETRIEVE JUST HE LOGGED IN USER'S POSTS

/* const posts = snapshot.val();
const farmPosts = [];
for (let id in posts) {
  farmPosts.push({ id, ...posts[id] });
}
if (snapshot.val() != null) setFarmPosts(farmPosts);
console.log("POST LIST", farmPosts);
console.log("snap", snapshot.val());
});
}, []); */
