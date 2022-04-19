import React,{useContext, useState} from 'react'
import CartItem from '../components/CartItem'
import {Context} from "../Context"
import { nanoid } from 'nanoid'

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const {cartItems, emptyCart} = useContext(Context)
   

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    const cartItemElements =  cartItems.map(item => 
       (<CartItem key={nanoid()} item={item} />)
    )

    const totalCost = () => {
        if (cartItems.length > 0 ){
        return cartItems.map(item => (parseInt(item.price)))
        .reduce((current, next) => (current + next),0)
        }
        return 0;
    }
    const totalCostDisplay = () => {
        const total = totalCost();
        return total.toLocaleString("en-US", {style: "currency", currency: "USD"})
    }

  return (
    <div className='cart-page'>
        <h1 className="cart-page-title">Check out</h1>
        {cartItemElements}
        <p className='cart-page-total'>Total: {totalCostDisplay()}</p>
        {
            cartItems.length > 0 ? 
            <div className='order-button-container'>
                <button onClick={placeOrder}
                className='order-button'>{buttonText}</button>
            </div> :
            <p>You have no items in your cart.</p>
        }
    </div>
  )
}

export default Cart