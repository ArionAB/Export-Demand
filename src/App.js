import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav } from "./components/nav/nav";
import { Header } from "./components/header/header";

import "./App.scss";
import { AboutUS } from "./components/About US/Aboutus";

function App() {
  return (
    <div className="container">
      <Router>
        <Nav />
        <Header />
        <AboutUS />
      </Router>
    </div>
  );
}

export default App;
