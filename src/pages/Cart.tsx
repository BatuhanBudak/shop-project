import React,{useContext, useState} from 'react'
import CartItem from '../components/CartItem'
import {Context} from "../Context"

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
   const appContext = useContext(Context);

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            setButtonText("Place Order")
            appContext!.emptyCart()
        }, 3000)
    }

    const cartItemElements =  appContext!.cartItems.map(item => 
       (<CartItem key={item.id} item={item} />)
    )

    const totalCost = () => {
        if (appContext!.cartItems.length > 0 ){
        return appContext!.cartItems.map(item => item.amount * (item.price))
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
            appContext!.cartItems.length > 0 ? 
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