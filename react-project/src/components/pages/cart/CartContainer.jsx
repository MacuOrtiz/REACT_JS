import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import useCount from "../../../hooks/useCount";

const CartContainer = () => {
  const { cart, clearCart, deleteProduct } = useContext(CartContext);
  console.log(cart)

  return (
    <div>
      <button onClick={clearCart}>Limpiar carrito</button>
      {cart.map((producto) => {
        const { count, añadir, eliminar } = useCount(
          producto.cantidad,
          producto.stock
        );

        return (
          <div key={producto.id}>
            <h2>{producto.title}</h2>
            <h3>${producto.price}</h3>
           
            <p>Numero de Personas: {count}</p>
            <button onClick={añadir}>+</button>
            <button onClick={eliminar}>-</button>
            <button onClick={() => deleteProduct(producto.id)}>
              Eliminar Tour
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CartContainer;
