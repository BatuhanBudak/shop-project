import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { CartItemType, Context } from '../Context'

export default function CartItem({item}: {item: CartItemType}) {
  
  const appContext = useContext(Context);
  

  return (
    <div  className='cart-item'>
      
      <img src={item.image} alt={item.description} width="120px" />
      <p>{item.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
      <button className = "remove-from-cart-button"
            onClick={() => appContext!.removeFromCart(item.id)}     
      >  <FontAwesomeIcon 
      icon={faX } /> 
      </button>
    </div>
  )
}


