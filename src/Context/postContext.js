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
  const [currentUser, setCurrentUser] = useState();
  const [id, setId] = useState("");
  let posts = [];
  // console.log("PostContextProvider", props.farm);
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

            console.log("DATAPOST", postData);

            // farmPosts.push({ item });

            // console.log("stars", item, "stars");

            // console.log("farmPosts", farmPosts);
            // console.log("DataPost", DataPost);
            // // console.log("property");
            // console.log("farmPosts", farmPosts);
            // console.log(DataPost);

            setFarmPosts(posts);
            console.log(posts);
            console.log(farmPosts);
          });
        });
      });
  }, []);

  // const posts = snapshot.val(); //snapshot.val()

  // farmPosts.push({ property, ...DataPost[property] });
  /*    for (let property in DataPost) {
              console.log(`DataPost.${property} = ${DataPost[property]}`);
              farmPosts.push(DataPost);
            } */
  /*  for (let prop of DataPost) {
            } */

  // if (snapshot.val() != null) setFarmPosts(farmPosts);
  console.log(posts);
  return (
    <>
      <PostContext.Provider value={{ posts }}>
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

/* .ref(`Users/Posts/`)
.on("value", (snapshot) => {
  console.log("Snapshot", snapshot.val());
  snapshot.forEach((userData) => {
    console.log("Userdata", userData);
    const userId = userData.key;
    console.log("userId", userId);
    userData.forEach((postData) => {
      console.log("POST-DATA", postData);
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
      }; */

// console.log(title);
// console.log(email);

// const DataPost = {
//   content,
//   email,
//   image,
//   phone,
//   product,
//   title,
// };
