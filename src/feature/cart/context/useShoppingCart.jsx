import { useContext } from "react"
import ShoppingCartContext from "./ShoppingCartContext"


function useShoppingCart(){
  const context = useContext(ShoppingCartContext)  
  if(!context){
    throw new Error('useShoppingCart debe ser usado dentro de un ShoppingCartProvider')
  }
  return context
}


export default useShoppingCart;