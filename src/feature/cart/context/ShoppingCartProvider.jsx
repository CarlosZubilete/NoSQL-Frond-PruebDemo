import { useEffect, useState } from "react";
import ShoppingCardContext from "./ShoppingCartContext";

function ShoppingCartProvider({children}){
  
  const [listCart,setListCart] = useState([]);
  // const [nameProduct, setNameProduct] = useState('');
  const addProduct = (value) => {
    setListCart([...listCart,value]);
  }

  useEffect(()=>{
    console.log('List Cart ', listCart);
  },[listCart])
  
  return(
    <ShoppingCardContext.Provider value={{ listCart, addProduct }}>
      {children}
    </ShoppingCardContext.Provider>
)};

export default ShoppingCartProvider;