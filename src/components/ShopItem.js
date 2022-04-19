import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import useHover from "../useHover";
export default function ShopItem(props) {

  const {addToCart} = useContext(Context)
  const [hovered, ref] = useHover();

  const iconClassName = hovered ? "cart-plus-span" : "cart-plus-span-none";
  
  return (
    <div className="shop-item-container">
      <div className="shop-item-img-container"
      ref={ref}>
        <img
          className="shop-item-img"
          src={props.product.image}
          alt={props.product.description}
        />
        <span  className = {iconClassName} onClick={() => addToCart(props.product)}>
          <FontAwesomeIcon 
                className="cart-plus-icon"
                icon={faCartPlus }/>
        </span>
      </div>
      <div className="shop-item-details-container">
        <Link to={`/shop/${props.product.id}`}>
          <h3 className="shop-item-title">{props.product.title}</h3>
        </Link>
        <h4 className="shop-item-price">{props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h4>
        <button
        className="add-to-cart-button"
        onClick={() => addToCart(props.product)}>Add to Cart</button>
      </div>
    </div>
  );
}
