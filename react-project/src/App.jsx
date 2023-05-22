import Navbarpage from "./components/layout/navbar/navbar/Navbar";
import { ProductsList } from "./components/pages/productos/productos";

function App() {
  return (
    <div className="app-container">
      <Navbarpage />
      <h1 className="centered-heading">Macu´s Recipies</h1>
      <ProductsList />
    </div>
  );
}

export default App;
