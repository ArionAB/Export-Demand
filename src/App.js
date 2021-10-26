import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "./components/nav/nav";
import { HomePage } from "./pages/homepage/homepage";
import { farmers } from "./components/farmers/farmers";
import { SignInSignUp } from "./pages/sign_in_up/sign_in_up";

import "./App.scss";

function App() {
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
}

export default App;
