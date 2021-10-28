import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { Nav } from "./components/nav/nav";
import { HomePage } from "./pages/homepage/homepage";
import { Farmers } from "./pages/farmers/farmers";
import { SignInSignUp } from "./pages/sign_in_up/sign_in_up";
import { auth } from "./firebase/firebase.utils";
import { Post } from "./pages/farmers/post";
import { noMatch } from "./components/noMatch/noMatch";
import { Create } from "./components/create/create";

import "./App.scss";

const App = ({ props }) => {
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
          <Route exact path="/farmers" component={Farmers} />
          <Route exact path="/farmers/:url" component={Post} />
          <Route exact path="/signin" component={SignInSignUp} />
          <Route exact path="/create" component={Create} />
          <Route path="" component={noMatch} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
