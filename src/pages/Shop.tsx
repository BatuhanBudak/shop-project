import React, { useContext } from "react";
import ShopItem from "../components/ShopItem";
import { Context } from "../Context";

export default function Shop() {
  const appContext = useContext(Context);

  const shopItems = appContext!.products.map((product) => (
    <ShopItem key={product.id} product={product} />
  ));

  return <main>{shopItems}</main>;
}
