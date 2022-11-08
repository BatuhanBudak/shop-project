import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Context } from "../Context";
export default function Header() {
  const appContext = useContext(Context);

  return (
    <nav>
      <Link to="/">
        <h2>HOME</h2>
      </Link>
      <Link to="shop">
        <h2>SHOP</h2>
      </Link>
      <div className="cart-icon-container">
        <Link to="cart">
          <ShoppingCartIcon className="cart-icon" />
        </Link>
        <span className="cart-items-length">
          {appContext!.cartItems.length}
        </span>
      </div>
    </nav>
  );
}
