import React, { useEffect, Suspense, lazy, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./component/Navigation/Navbar";
import BottomNav from "./component/Navigation/BottomNavigation/BottomNav";
// import Products from "./component/products/Products";
// import Cart from "./component/Cart/Cart";
// import Dashboard from "./component/Admin/dashboard/Dashboard";
// import PaymentDetail from "./component/Payment/paymentDetail";
// import Checkout from "./component/CheckoutForm/Checkout/Checkout";
// import Orders from "./component/Order/Orders";
// import Auth from "./component/Auth/Auth";

import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import * as actions from "./store/actions/index";

const App = () => {
  //REDUX
  const dispatch = useDispatch();

  const location = useLocation();
  console.log("dadass", location);

  const onAuthCheckState = useCallback(
    () => dispatch(actions.authCheckState),
    []
  );
  const onProductFetch = useCallback(
    (query) => dispatch(actions.product(query)),
    []
  );

  const onFetchCart = useCallback(
    () => dispatch(actions.fetchCart()),
    [actions.fetchCart]
  );
  const onFetchCategory = useCallback(
    () => dispatch(actions.fetchCategory()),
    [actions.fetchCategory]
  );
  const onAuthTimeout = useCallback(
    (timeout) => dispatch(actions.authTimeout(timeout)),
    []
  );

  const { isAuth } =
    // useCallback(
    useSelector((state) => ({
      isAuth: state.auth.token !== null,
    }));
  //   [location.pathname]
  // );

  const Products = lazy(() => import("./component/products/Products"));
  const Dashboard = lazy(() => import("./component/Admin/dashboard/Dashboard"));
  const PaymentDetail = lazy(() => import("./component/Payment/paymentDetail"));
  const Orders = lazy(() => import("./component/Order/Orders"));
  const Checkout = lazy(() =>
    import("./component/CheckoutForm/Checkout/Checkout")
  );
  const Cart = lazy(() => import("./component/Cart/Cart"));
  const Auth = lazy(() => import("./component/Auth/Auth"));

  useEffect(() => {
    // onProductFetch();
    onFetchCategory();
  }, []);

  console.log(isAuth);

  useEffect(() => {
    setTimeout(() => {
      onFetchCart();
    }, 1000);
  }, [isAuth, location.pathname]);

  useEffect(() => {
    const expired = new Date(localStorage.getItem("expiredTime")).getTime();
    expired && onAuthTimeout(expired - new Date().getTime());
    dispatch(onAuthCheckState());
  }, [location.pathname]);

  const RoutesAuth = useMemo(
    () => (
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Navbar>
              <Products onFetchProducts={onProductFetch} />
            </Navbar>
          )}
        />
        <Route
          path="/order"
          component={() => (
            <Navbar>
              <Orders />
            </Navbar>
          )}
        />
        <Route
          path="/status?order_id=:id"
          component={() => (
            <Navbar>
              <PaymentDetail />
            </Navbar>
          )}
        />
        <Route
          path="/status"
          component={() => (
            <Navbar>
              <PaymentDetail />
            </Navbar>
          )}
        />
        <Route
          path="/cart"
          component={() => (
            <Navbar>
              <Cart />
            </Navbar>
          )}
        />
        <Route
          path="/checkout"
          component={() => (
            <Navbar>
              <Checkout />
            </Navbar>
          )}
        />
        <Route path="/admin" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    ),
    [location.pathname, isAuth]
  );

  const Routes = useMemo(
    () => (
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Navbar>
              <Products onFetchProducts={onProductFetch} />
            </Navbar>
          )}
        />
        <Route
          path="/cart"
          component={() => (
            <Navbar>
              <Cart />
            </Navbar>
          )}
        />
        <Route path="/admin" component={Dashboard} />
        {/* <Route path="/status?order_id=:id" component={PaymentDetail} /> */}
        {/* <Route path="/status" component={PaymentDetail} /> */}
        <Route path={"/auth/login"} component={() => <Auth />} />
        <Route path={"/auth/signup"} component={() => <Auth />} />
        <Route path={"/order"} component={() => <Orders />} />
        <Redirect to="/" />
      </Switch>
    ),
    [location.pathname, isAuth]
  );

  return (
    <div>
      {/* <Navbar> */}
      <Suspense fallback={<div></div>}>{isAuth ? RoutesAuth : Routes}</Suspense>
      {/* {routes} */}
      {/* <BottomNav /> */}
      {/* </Navbar> */}
    </div>
  );
};

export default React.memo(App);
