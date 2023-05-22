import Navbarpage from "./components/layout/navbar/navbar/Navbar";
import { ProductsList } from "./components/pages/productos/productos";

function App() {
  return (
    <>
      <Navbarpage />

      <h1>Macu´s Recipies</h1>
      <ProductsList />
    </>
  );
}

export default App;
