import Home from "../components/pages/home/Home";
import ProducList from "../components/produclist/ProducList";
import FetchingDeDatosCointainer from "../components/pages/fetchingDeDatos/FetchingDeDatosCointainer";
import ItemCount from "../components/common/counter/itemCount";
import ProductoDetailContainer from "../components/pages/productDetail/ProductoDetailContainer";
import Formulario from "../components/pages/Formulario/Formulario";

export const menuRoutes = [
  {
    id: "homepage",
<<<<<<< HEAD
    path: "/inicio",
=======
    path: "inicio",
>>>>>>> 3b7e8143674475240fc26c411eae1715e0153481
    Element: Home,
  },
  {
    id: "productos",
<<<<<<< HEAD
    path: "/products",
=======
    path: "products",
>>>>>>> 3b7e8143674475240fc26c411eae1715e0153481
    Element: ProducList,
  },
  {
    id: "contactanos",
<<<<<<< HEAD
    path: "/contacto",
=======
    path: "contacto",
>>>>>>> 3b7e8143674475240fc26c411eae1715e0153481
    Element: FetchingDeDatosCointainer,
  },
  {
    id: "carrito",
<<<<<<< HEAD
    path: "/count",
=======
    path: "count",
>>>>>>> 3b7e8143674475240fc26c411eae1715e0153481
    Element: ItemCount,
  },
  {
    id: "detalleProductos",
<<<<<<< HEAD
    path: "/detalle",
=======
    path: "detalle",
>>>>>>> 3b7e8143674475240fc26c411eae1715e0153481
    Element: ProductoDetailContainer,
  },
  {
    id: "formularios",
<<<<<<< HEAD
    path: "/formulario",
    Element: Formulario,
  },


    { id: 'producto', 
    path: '/product/:id', 
    Element: ProductoDetailContainer },
    
  ];

=======
    path: "formulario",
    Element: Formulario,
  },
];
>>>>>>> 3b7e8143674475240fc26c411eae1715e0153481
