import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { Nav } from "./components/nav/nav";
import { HomePage } from "./pages/homepage/homepage";
import { Farmers } from "./pages/farmers/farmers";
import { SignInSignUp } from "./pages/sign_in_up/sign_in_up";
import { auth } from "./firebase/firebase.utils";
import { noMatch } from "./components/noMatch/noMatch";
import { PostContextProvider } from "./Context/postContext";

import "./App.scss";

const App = () => {
  const [currentUser, setCurrentUser] = useState();
  // let unsuscribeFromAuth = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      setCurrentUser(user);
      console.log(user);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="container">
      <Router>
        <Nav currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PostContextProvider>
            <Route exact path="/farmers/" component={Farmers} />
          </PostContextProvider>
          <Route exact path="/signin" component={SignInSignUp} />
          <Route path="" component={noMatch} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
