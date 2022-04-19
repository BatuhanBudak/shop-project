import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../Context'
import PropTypes from "prop-types"

export default function CartItem({item}) {
  
  const {removeFromCart} = useContext(Context);
  

  return (
    <div  className='cart-item'>
      
      <img src={item.image} alt={item.description} width="120px" />
      <p>{item.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
      <button className = "remove-from-cart-button"
            onClick={() => removeFromCart(item.id)}     
      >  <FontAwesomeIcon 
      icon={faX } /> 
      </button>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    image:PropTypes.string.isRequired
  })
}

