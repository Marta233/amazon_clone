import "./App.css";
import Checkout from "./Component/Checkout/Checkout";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/User/Login";
import { useStateValue } from "./Component/StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";

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
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
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
            path="/Login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
