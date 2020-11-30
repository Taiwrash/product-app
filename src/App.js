import React from "react";
import Header from "./pages/Header";
import GeneralProducts from "./products/GeneralProducts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./pages/Error";
import ProductDetails from "./products/ProductDetails";
import SignUp from "./users/SignUp";
import Login from "./users/Login";
import ProductUpload from "./users/ProductUpload";
import Button from "./pages/Button";
import NavBar from "./pages/NavBar";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <Header />
            <GeneralProducts />
          </Route>
          <Route path="/products">
            <GeneralProducts />
          </Route>
          <Route path="/product/:id">
            <ProductDetails />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/edit">
            <Button />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/upload">
            <ProductUpload />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
