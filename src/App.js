import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./containers/home/Home";
import Error404 from "./containers/errors/Error404";

import Signup from "./containers/auth/Signup";
import Login from "./containers/auth/Login";
import Activate from "./containers/auth/Activate";
import ResetPassword from "./containers/auth/ResetPassword";
import ResetPasswordConfirm from "./containers/auth/ResetPasswordConfirm";

import Shop from "./containers/Shop/Shop";
import ProductDetail from "./containers/Shop/productDetail";
import Cart from "./containers/Shop/Cart";
import Checkout from "./containers/Shop/Checkout";
import PrivateRoute from "./hocs/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />

          <Route path="/" element={<Home />} />

          {/* Auth routes */}
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="activate/:uid/:token" element={<Activate />} />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/product-detail/:productSlug"
            element={<ProductDetail />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={<PrivateRoute element={Checkout} />}
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
