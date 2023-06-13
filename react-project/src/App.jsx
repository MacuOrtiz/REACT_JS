import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar/navbar/Navbar";
import ProducList from "./components/produclist/ProducList";
import "../src/App.css";
import FetchingDeDatosCointainer from "./components/pages/fetchingDeDatos/FetchingDeDatosCointainer";
import ItemCount from "./components/common/counter/itemCount";
import ProductoDetailContainer from "./components/pages/productDetail/ProductoDetailContainer";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="inicio" element={<Home />} />
          <Route path="products" element={<ProducList />} />
          <Route path="contacto" element={<FetchingDeDatosCointainer />} />
          <Route path="count" element={<ItemCount />} />
          <Route path="detalle" element={<ProductoDetailContainer />}></Route>
        </Route>
        <Route path="*" element={<h1>404 No Found </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
