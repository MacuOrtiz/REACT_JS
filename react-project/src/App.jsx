import Navbarpage from "./components/layout/navbar/navbar/Navbar";
import { ProductsList } from "./components/pages/productos/productos";
import "../src/App.css";

function App() {
  return (
    <div>
      <Navbarpage />

      <div className="app-container">
        <h1 className="centered-heading">Macu´s Recipies</h1>
      </div>
      <ProductsList />
    </div>
  );
}

export default App;
