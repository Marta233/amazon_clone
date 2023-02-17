import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";

function Product({ title, id, rating, price, image }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is basket", basket);
  const addToBaket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="Products">
      <div className="Product__info">
        <p>{title}</p>
        <div className="price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="Rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image}></img>
      <button onClick={addToBaket} className="baket__add">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
