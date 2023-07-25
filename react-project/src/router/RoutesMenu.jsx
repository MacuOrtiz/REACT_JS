import Home from "../components/pages/home/Home";
import ProducList from "../components/produclist/ProducList";
import FetchingDeDatosCointainer from "../components/pages/fetchingDeDatos/FetchingDeDatosCointainer";
import ItemCount from "../components/common/counter/itemCount";
import ProductoDetailContainer from "../components/pages/productDetail/ProductoDetailContainer";
import Formulario from "../components/pages/Formulario/Formulario";
import CartContainer from "../components/pages/cart/CartContainer";
import CheckoutContainer from "../components/pages/Checkout/CheckoutContainer";

export const menuRoutes = [
  {
    id: "homepage",
    path: "inicio",
    Element: Home,
  },
  {
    id: "productos",
    path: "products",
    Element: ProducList,
  },
  {
    id: "contactanos",
    path: "contacto",
    Element: FetchingDeDatosCointainer,
  },
  {
    id: "carrito",
    path: "count",
    Element: CartContainer,
  },

  { id: "producto", 
  path: "/product/:id", 
  Element: ProductoDetailContainer },

  
  {
    id: "formularios",
    path: "formulario",
    Element: Formulario,
  },
  {
    id: "checkout",
    path: "checkout",
    Element: CheckoutContainer,
  }
];
