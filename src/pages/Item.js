import React, {useContext} from 'react'
import {Context} from "../Context"
import {useParams} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
export default function Item() {
    
    const {findItem, addToCart} = useContext(Context)
    const {itemId} = useParams();
    let thisItem = findItem(itemId);
    
    return (
    <div className='item-page-container'>
        <h3 className='item-page-title'>{thisItem.title}</h3>
        
        <img className='item-page-img' src={thisItem.image} alt={thisItem.description}/>
        <p className='item-page-description'>{thisItem.description}</p>
        <div className='item-page-details-container'>
          <span className="item-page-rating">Rating: {thisItem.rating.rate}</span>
          <span className="item-page-price">Price: ${thisItem.price}</span>
          <button 
                className="item-page-cart-button"
                onClick={() => addToCart(thisItem)}>Add to Cart  <FontAwesomeIcon 
                className="item-page-cart-plus-icon"
                icon={faCartPlus }/></button>
        </div>
    </div>
  )
}
