import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "./components/nav/nav";
import { HomePage } from "./pages/homepage/homepage";
import { farmers } from "./pages/farmers/farmers";

import "./App.scss";

function App() {
  return (
    <div className="container">
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/farmers" component={farmers} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
