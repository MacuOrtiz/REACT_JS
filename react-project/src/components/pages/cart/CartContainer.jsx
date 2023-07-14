import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h1 className="mb-3 text-uppercase text-lg-center">
        urku extreme mountain tours
      </h1>

      {cart.map((producto) => (
        <div key={producto.id}>
          <h2>{producto.title}</h2>
          <h3>${producto.price}</h3>
          <p> Numero de Personas: {producto.cantidad}</p>
          <button onClick={añadir}>+</button>
          <button onClick={eliminar}>-</button>
        </div>
      ))}
      
      {cart.length > 0 && <button onClick={clearCart}>Limpiar carrito</button>}
    </div>
  );
};

export default CartContainer;

