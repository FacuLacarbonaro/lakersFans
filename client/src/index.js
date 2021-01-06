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
import Checkout from "./Components/Pages/Checkout/Checkout";
import IconCheckout from "./Components/IconCheckout/IconCheckout";
import Aboutus from "./Components/Pages/Aboutus/Aboutus";
import ProductDetail from "./Components/Pages/ProductDetail/ProductDetail";

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
            <Route path="/checkout" component={Checkout} />
            <Route path="/aboutus" component={Aboutus} />
            <Route path="/product/:id" component={ProductDetail} />
          </Switch>
          <IconCheckout />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
