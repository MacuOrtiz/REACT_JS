import React, { createContext, useState } from "react";
import useCount from "../hooks/useCount";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log("esto es ", cart);

  const agregarAlCarrito = (producto, cantidad) => {
    let exist = isInCart(producto.id);
    if (exist) {
      let newArray = cart.map((newProducto) => {
        if (newProducto.id === producto.id) {
          return {
            ...newProducto,
            cantidad: newProducto.cantidad + producto.cantidad,
          };
        } else {
          return newProducto;
        }
      });
      setCart(newArray);
    } else {
      const productoEnCarrito = { ...producto, cantidad };
      setCart((prevState) => [...prevState, productoEnCarrito]);

      console.log(`Producto: ${producto.title}, Cantidad: ${cantidad}`);
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((prod) => prod.id === id);
    return exist;
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteProduct = (id) => {
    let newArray = cart.filter((producto) => producto.id !== id);
    setCart(newArray);
  };

  const getTotalProduct = (id) => {
    let product = cart.find((prod) => prod.id === +id);
    console.log(product?.cantidad);
    return product?.cantidad;
  };

  let data = {
    cart,
    agregarAlCarrito,
    clearCart,
    deleteProduct,
    getTotalProduct,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
