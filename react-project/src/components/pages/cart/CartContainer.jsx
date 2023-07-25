import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import useCount from "../../../hooks/useCount";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

const CartContainer = () => {
  const { cart, clearCart, deleteProduct } = useContext(CartContext);

  const getTotal = () => {
    return cart.reduce((total, producto) => {
      const { count } = useCount(producto.cantidad, producto.stock);
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
          <Card key={producto.id} className="mb-3">
            <CardContent>
              <img
                src={producto.img}
                alt={producto.title}
                className="product-thumbnail"
                style={{ width: "150px", marginBottom: "1rem" }}
              />
              <Typography variant="h5" component="h2">
                {producto.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                ${producto.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Numero de Personas: {count}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Subtotal: $ {subTotal}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={añadir}>+</Button>
              <Button onClick={eliminar}>-</Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => deleteProduct(producto.id)}
              >
                Eliminar Tour
              </Button>
            </CardActions>
          </Card>
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

