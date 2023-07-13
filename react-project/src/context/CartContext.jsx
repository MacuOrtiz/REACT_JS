import { createContext, useState } from "react";

export const CartContext = createContext ();

//se crea el componente del proveedor del constexto
const CartContextProvider = ({children}) => {
    
    const [cart, setCart] = useState ([ ])
   
  const agregarAlCarrito = () => {
  console.log ("agreagr al carrito")

  }

    let data = {
      cart,
    agregarAlCarrito,

    }
    return <CartContext.Provider value={ data }> {children} </CartContext.Provider>
}
export default CartContextProvider