import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductoDetail from "./ProductoDetail";
import { CartContext } from "../../../context/CartContext";
import { db } from ".././../../firebaseConfig"; // Importa la instancia de Firestore
import { collection, doc, getDoc } from "firebase/firestore"; // Importa los métodos para realizar la consulta


const ProductoDetailContainer = () => {
  const [productoSelected, setProductoSelected] = useState({});
  const { agregarAlCarrito, getTotalProduct } = useContext(CartContext);
  const { id } = useParams();
  const cantidad = getTotalProduct(id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id); // Crea una referencia al documento en Firestore
        const docSnap = await getDoc(docRef); // Obtiene el documento de Firestore
        if (docSnap.exists()) {
          // Verifica si el documento existe en Firestore
          setProductoSelected({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No se encontró el producto con el ID especificado.");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <ProductoDetail
      cantidad={cantidad}
      productoSelected={productoSelected}
      agregarAlCarrito={agregarAlCarrito}
    />
  );
};


export default ProductoDetailContainer;
