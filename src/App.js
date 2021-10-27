import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { Nav } from "./components/nav/nav";
import { HomePage } from "./pages/homepage/homepage";
import { farmers } from "./pages/farmers/farmers";
import { SignInSignUp } from "./pages/sign_in_up/sign_in_up";
import { auth } from "./firebase/firebase.utils";

import "./App.scss";

const App = ({ props }) => {
  const [currentUser, setCurrentUser] = useState();
  let unsuscribeFromAuth = null;

  useEffect(() => {}, []);
  unsuscribeFromAuth = auth.onAuthStateChanged(function (user) {
    setCurrentUser(user);
    console.log(user);
  });

  return (
    <div className="container">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/farmers" component={farmers} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
