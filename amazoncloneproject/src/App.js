import "./App.css";
import Checkout from "./Component/Checkout/Checkout";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/User/Login";
import { useStateValue } from "./Component/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Component/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js"; //
import { Elements } from "@stripe/react-stripe-js"; // to wrap to use stripe
import Orders from "./Component/Payment/Orders";
// publication key or api key
const promise = loadStripe(
  "pk_test_51Mcv38BTvE63eNWO7X2unNTy9unhdx46OJmhs5EOzOTJqMfcTLZtG3jHoMEq3VFJ2rMlCp84rR4GOim0ki0gBweC00UejF6iMB"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // auth state sekeyayerr
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/Checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/Payment"
            element={
              <>
                <Header />
                {/* // to use the payment process in stryp we have to wrpap using element */}
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          ></Route>
          <Route
            path="/Login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
          <Route
            path="/Orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
