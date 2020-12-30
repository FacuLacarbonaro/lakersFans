import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "./Redux/Store";

import Nav from "./Components/Nav/Nav.jsx";
import Home from "./Components/Pages/Home/Home";
import Squad from "./Components/Pages/Squad/Squad";
import Shop from "./Components/Pages/Shop/Shop";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/squad" component={Squad} />
            <Route path="/shop" component={Shop} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
