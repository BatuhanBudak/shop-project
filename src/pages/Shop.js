import React, {useContext, useEffect, useState} from "react"
import ShopItem from "../components/ShopItem"
import {Context} from "../Context"

export default function Shop() {
  
    const {allProducts} = useContext(Context)

    const shopItems = allProducts.map((product) => (
          <ShopItem key={product.id} product={product} /> 
    ))

  return (
    <main>
        {shopItems}
        {/* <Outlet /> */}
    </main>
  )
}
