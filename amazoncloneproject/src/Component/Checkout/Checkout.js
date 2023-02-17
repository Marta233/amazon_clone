import React from "react";
import CheckOutProduct from "../ChckOutProduct/CheckOutProduct";
import { useStateValue } from "../StateProvider";
import Subtotal from "../SubTotal/Subtotal";
import "./Checkout.css";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="chckout">
      <div className="chckout__left">
        <img
          className="check__img"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <h3>Hello</h3>
        <h2 className="checkout__title">Your Shopping Basket</h2>
        {basket.map((item) => (
          <CheckOutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
