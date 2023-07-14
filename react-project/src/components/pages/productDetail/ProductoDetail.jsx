import { useContext } from "react";
import useCount from "../../../hooks/useCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { BsCart4 } from "react-icons/bs";
import { FadeLoader } from "react-spinners";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const objetoLoader = {
  display: "block",
  margin: "0 auto",
};

const ProductoDetail = ({ productoSelected, cantidad }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  const { count, añadir, eliminar } = useCount(0, productoSelected.stock);

  const handleAddToCart = (e) => {
    e.preventDefault();
    agregarAlCarrito(productoSelected, count);
    // navigate('/count');
  };

  if (!productoSelected || Object.keys(productoSelected).length === 0) {
    return <FadeLoader cssOverride={objetoLoader} color="#36d7b7" />;
  }

  return (
    <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
      <CardMedia
        component="img"
        height="240"
        image={productoSelected.img}
        alt={productoSelected.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productoSelected.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>{productoSelected.category}</p>
          <p> {productoSelected.description}</p>
          <p> Precio del Tour: ${productoSelected.price}</p>
          <p>Numero de Personas: {count}</p>
        </Typography>
      </CardContent>
      <CardActions>

        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={eliminar}>
          Quitar
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} onClick={añadir}>
          Añadir
        </Button>



      </CardActions>

      <div>
       
        <Button variant="text" onClick={handleAddToCart}>Agregar al Carrito</Button>
      </div>
      <div>
        <Link color="inherit" className="nav-link" to="/count">
          <span variant="text" >Ir a Carro</span>
          <BsCart4 size="35px" color="yellow" />
        </Link>
      </div>
    </Card>
  );
}

export default ProductoDetail;
