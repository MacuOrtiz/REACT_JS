

const ProductoDetail = ({ productoSelected }) => {
  // Si productoSelected es undefined o un objeto vacío, muestra un mensaje de carga
  if (!productoSelected || Object.keys(productoSelected).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{productoSelected.title}</h2>
      <img src={productoSelected.img} alt={productoSelected.title} />
      <p>{productoSelected.description}</p>
      <p>${productoSelected.price}</p>
      <p>Stock: {productoSelected.stock}</p>
      
      <button >Añadir</button>
      <button >Quitar</button>
      <p>Categoría: {productoSelected.category}</p>
 
    </div>
  );
};

export default ProductoDetail;

