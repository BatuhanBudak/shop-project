import { nanoid } from 'nanoid';
import React, {useEffect, useState} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
    const [allProducts, setAllProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
        .then(res=>res.json())
        .then(json=>setAllProducts(() => json.map(item => ({...item,
        id: nanoid()}))))
    },[])
    
    function findItem(id){
      return allProducts.find(item => {
        return item.id === id
      })
    }
    function addToCart(newItem){
      setCartItems(prevItems => [...prevItems, {...newItem, id:nanoid()}]) 
    }
    function removeFromCart(id) {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }
    
  
  function emptyCart() {
      setCartItems([])
  }
  return (
    <Context.Provider value={{allProducts, cartItems, findItem,emptyCart,addToCart, removeFromCart }}>
    {children}
    </Context.Provider>
  )
}
export {ContextProvider, Context}