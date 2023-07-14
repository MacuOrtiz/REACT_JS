import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductoDetail from "./ProductoDetail";
import { products } from "../../produclist/productMock";
import { CartContext } from "../../../context/CartContext";

const ProductoDetailContainer = () => {
  const [productoSelected, setProductoSelected] = useState({});

  const { agregarAlCarrito, getTotalProduct } = useContext(CartContext);

  const handleAddToCart = () => {
    agregarAlCarrito(productoSelected, cantidad); // Pasa la cantidad como segundo argumento
  };

  const { id } = useParams();

  const cantidad = getTotalProduct(id);
  console.log(cantidad);

  useEffect(() => {
    console.log("ID del producto:", id);

    let productFind = products.find((product) => product.id === Number(id));
    console.log("Producto encontrado:", productFind);

    const getProduct = new Promise((res) => {
      setTimeout(() => {
        res(productFind);
      }, 2000);
    });

    getProduct
      .then((res) => {
        console.log("Producto seleccionado:", res);
        setProductoSelected(res);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log("Estado productoSelected:", productoSelected);

  return (
    <ProductoDetail
      cantidad={cantidad}
      productoSelected={productoSelected}
      agregarAlCarrito={agregarAlCarrito}
    />
  );
};

export default ProductoDetailContainer;
