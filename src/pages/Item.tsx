import React, { useContext } from "react";
import { Context } from "../Context";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function Item() {
  
  const appContext = useContext(Context);
  const { itemId } = useParams();
  let thisItem = appContext!.findItem(parseInt(itemId!));

  return (
    <div className="item-page-container">
      <h3 className="item-page-title">{thisItem && thisItem.title}</h3>

      <img
        className="item-page-img"
        src={thisItem && thisItem.image}
        alt={thisItem && thisItem.description}
      />
      <p className="item-page-description">
        {thisItem && thisItem.description}
      </p>
      <div className="item-page-details-container">
        <span className="item-page-rating">
          Rating: {thisItem && thisItem.rating.rate}
        </span>
        <span className="item-page-price">
          Price: ${thisItem && thisItem.price}
        </span>
        <button
          className="item-page-cart-button"
          onClick={() => appContext!.addToCart(thisItem!)}
        >
          Add to Cart{" "}
          <FontAwesomeIcon
            className="item-page-cart-plus-icon"
            icon={faCartPlus}
          />
        </button>
      </div>
    </div>
  );
}
