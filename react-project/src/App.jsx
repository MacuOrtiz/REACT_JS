import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/navbar/navbar/Navbar";
import { menuRoutes } from "./router/RoutesMenu";
import CartContextProvider from "./context/CartContext";
import Home from "./components/pages/home/Home";


function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>

      <Navbar />
      <Routes>
        {menuRoutes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
          <Route path="/" element={<Home />} /> 
        <Route path="*" element={<h1>404 No Found </h1>} />
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;