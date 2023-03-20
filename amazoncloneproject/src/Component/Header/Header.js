import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header__container">
      <div className="header__containt">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        <div className="search__header">
          <input className="header__searchInput" type="text"></input>
          <SearchIcon className="header__searchicone"></SearchIcon>
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"} className="header__clear">
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header__optionTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/Orders" className="header__clear">
            <div className="header__option">
              <span className="header__optionOne">Returns</span>
              <span className="header__optionTwo">& Order</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionOne">Your</span>
            <span className="header__optionTwo">Prime</span>
          </div>
          <Link to={!user ? "/" : "/Checkout"} className="header__clear">
            <ShoppingBasketOutlinedIcon className="shoppingCart" />
          </Link>
          <span className=" header__count">{!user ? 0 : basket.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
