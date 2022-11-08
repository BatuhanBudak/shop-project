import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

export type Product = {
  id: number;
  title: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  }
  category: string;
  description: string;
  image: string;
};
export type CartItemType = {
  amount: number
} & Product;

export type ContextType = {
  products: Product[];
  cartItems: CartItemType[];
  findItem: (id: number) => Product | undefined;
  emptyCart: () => void;
  addToCart: (item: Product) => void;
  removeFromCart: (id:number) => void;
}
const getProducts = async (): Promise<Product[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json();

const Context = React.createContext<null | ContextType>({} as ContextType);

function ContextProvider({ children }: {children: React.ReactNode}) {
  const [products, setProducts] = useState([] as Product[]);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const {data, isLoading, error,isSuccess } = useQuery<Product[]>([products], getProducts)

  

  useEffect(() => {
    if(data){

      setProducts(data);
    }
  }, [isSuccess]);

  function findItem(id: number) {
    return products.find((item) => {
      return item.id === id;
    });
  }
  function addToCart(newItem: Product) {
    // setCartItems((prevItems) => [...prevItems, { ...newItem, id: nanoid() }]);
    setCartItems(prevItems => {
      const isItemInCart = prevItems.find(item => item.id === newItem.id)
      if(isItemInCart){
       return prevItems.map(item => item.id === newItem.id 
          ? {...item, amount: item.amount+1} 
          : item)
      }
      return [...prevItems, {...newItem, amount: 1}]
    })


  }
  function removeFromCart(id: number) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCartItems([] as CartItemType[]);
  }
  return (
    <Context.Provider
      value={{
        products,
        cartItems,
        findItem,
        emptyCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </Context.Provider>

  );
}
export { ContextProvider, Context };
