import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/navbar/navbar/Navbar";
<<<<<<< HEAD
import { menuRoutes } from "./router/menu.routes";

=======
import { menuRoutes } from "./routes/menu.routes";
>>>>>>> 3b7e8143674475240fc26c411eae1715e0153481

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {menuRoutes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
        <Route path="*" element={<h1>404 No Found </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
