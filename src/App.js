import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Nav } from "./components/nav/nav";
import { HomePage } from "./pages/homepage/homepage";
import { Farmers } from "./pages/farmers/farmers";
import { SignInSignUp } from "./pages/sign_in_up/sign_in_up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { noMatch } from "./components/noMatch/noMatch";
import { PostContext, PostContextProvider } from "./Context/postContext";
import { Modal } from "./components/Modal/modal";

import "./App.scss";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [id, setId] = useState("");
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
        console.log("userAuth + key", userAuth.uid);
        //below line fixed my issue of getting an error if
        //i was trying to acces the app and i was not log out
      } else if (!userAuth && typeof window !== "undefined") {
        return null;
      }
      console.log("userAuth + key", userAuth.uid);

      //User autehntication session persistence: if user refreshes page he is still logged in to firebase
      const id = userAuth.uid;

      // setId(id); id = userAuth.uid;
      setId(id);
    });
    <>
      <Modal id={id} />
    </>;
    return unsubscribe;
  }, []);
  /*  if (auth().currentUser !== null)
    console.log("user id: " + auth().currentUser.uid); */

  return (
    <div className="container">
      <Router>
        <Nav currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PostContextProvider>
            <Route exact path="/farmers/" component={Farmers} />
            <Route exact path="/signin" component={SignInSignUp} />
          </PostContextProvider>
          <Route path="" component={noMatch} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

/* 
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.on("value", (snapShot) => {
        setCurrentUser({ currentUser, id: snapShot.id, ...snapShot.val() });
        console.log("SNAPSHOT", snapShot.val());
      });
      console.log("test", currentUser, setCurrentUser);
    }
    // setCurrentUser(user);

    console.log("user", userAuth); //User autehntication session persistence: if user refreshes page he is still logged in to firebase
  });
  return unsubscribe;
}, []); */

/* useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      console.log("userAUTH", userAuth);
      userRef.on("value", (snapShot) => {
        const users = snapShot.val();
        const currentUser = [];
        for (let id in users) {
          currentUser.push({ id, ...users[id] });
        }
        setCurrentUser(currentUser);
      });
      console.log("test", currentUser, setCurrentUser);
    }
    // setCurrentUser(user);
    console.log("CurrentUser32", currentUser);
    console.log("user", userAuth); //User autehntication session persistence: if user refreshes page he is still logged in to firebase
  });
  console.log("CurrentUser35", currentUser);
  return unsubscribe;
}, []); */
