import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav.jsx";
import Home from "./Components/Pages/Home/Home";
import Squad from "./Components/Pages/Squad/Squad";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/squad" component={Squad} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
