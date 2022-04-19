import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import {Context} from "../Context"

export default function Header() {
  const {cartItems} = useContext(Context)

  

  return (

    <nav>
    <Link to="/"><h2>HOME</h2></Link>
    <Link to="shop"><h2>SHOP</h2></Link>
    <div className='cart-icon-container'>
      <Link to="cart"><FontAwesomeIcon className = "cart-icon"
      
       icon={faCartShopping }/></Link>
       <span className='cart-items-length'>{cartItems.length}</span>
    </div>

    </nav>
  )
}
