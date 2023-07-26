import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import useCount from "../../../hooks/useCount"

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

const CartContainer = () => {
  const { cart, clearCart, deleteProduct, getTotalProduct } = useContext(
    CartContext
  );

  const getTotal = () => {
    return cart.reduce((total, producto) => {
      const count = getTotalProduct(producto.id);
      const subTotal = producto.price * count;
      return total + subTotal;
    }, 0);
  };

  return (
    <div className="container">
      <h1 className="mb-3 text-uppercase text-lg-center">
        urku extreme mountain tours
      </h1>

      {cart.map((producto) => {
        const { count, añadir, eliminar } = useCount(
          producto.cantidad,
          producto.stock
        );

        const subTotal = producto.price * count;

        return (
          <div key={producto.id} className="card mb-3">
            <div className="card-body">
              <img
                src={producto.img}
                alt={producto.title}
                className="product-thumbnail"
                style={{ width: "150px" }}
              />
              <h2 className="card-title">{producto.title}</h2>
              <h3 className="card-text">${producto.price}</h3>
              <p className="card-text">Numero de Personas: {count}</p>
              <button className="btn btn-primary me-2" onClick={añadir}>
                +
              </button>
              <button className="btn btn-primary" onClick={eliminar}>
                -
              </button>
              <div>
                <p>Subtotal: $ {subTotal}</p>
              </div>
              <div>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProduct(producto.id)}
                >
                  Eliminar Tour
                </button>

              </div>
            </div>
          </div>
        );
      })}

      <div className="text-center">
        <Button variant="contained" color="secondary" onClick={clearCart}>
          Limpiar carrito
        </Button>
        <Link to="/checkout">
          <Button variant="contained" color="secondary">
            Finalizar Compra
          </Button>
        </Link>

      </div>

      <h2 className="text-center mt-4">Total: $ {getTotal()}</h2>
    </div>
  );
};

export default CartContainer;
