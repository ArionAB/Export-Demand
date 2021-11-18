import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Nav } from "./components/nav/nav";
import { HomePage } from "./pages/homepage/homepage";
import { Farmers } from "./pages/farmers/farmers";
import { SignInSignUp } from "./pages/sign_in_up/sign_in_up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { noMatch } from "./components/noMatch/noMatch";
import { PostContext, PostContextProvider } from "./Context/postContext";
import { Goals } from "./pages/Our_Goals/our_goals";
import { Modal } from "./components/Modal/modal";

import "./App.scss";
import { Contact } from "./pages/contact_us/contact_us";

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
          const id = userAuth.uid;
          setId(id);
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

      // setId(id); id = userAuth.uid;
    });
  }, []);
  console.log(id);
  console.log(currentUser);

  return (
    <div className="container">
      <Router>
        <Modal currentUser={currentUser} />
        <Nav currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={Contact} />
          <PostContextProvider>
            <Route exact path="/goals" component={Goals} />
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
