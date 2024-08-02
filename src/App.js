import NavBar from "./Components/Layout/NavBar";
import NavBarHome from "./Components/Layout/NavBarHome";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./Components/Layout/Footer";
import Carrusel from "./Components/Carrusel";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Resetpass from "./Pages/Resetpass";
import Tiendas from "./Pages/Tiendas";
import Productos from "./Pages/Productos";
import Categorias from "./Pages/Categorias";
import Categoriasuser from "./Pages/Categoriasuser";
import Tienda from "./Pages/Tienda";
import Mainuser from "./Pages/Mainuser";
import Productosuser from "./Pages/Productosuser";
import Tiendasuser from "./Pages/Tiendasuser";
import Tiendauser from "./Pages/Tiendauser";
import Perfil from "./Pages/Perfil";
import Historial from "./Pages/Historial";
import Carrito from "./Pages/Carrito";
import Configuracion from "./Pages/Configuracion";
import Tarjeta from "./Pages/Tarjeta";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/navbarhome" element={<NavBarHome />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/carrusel" element={<Carrusel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpass" element={<Resetpass />} />
        <Route path="/tiendas" element={<Tiendas />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/categoriasuser" element={<Categoriasuser />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/mainuser" element={<Mainuser />} />
        <Route path="/productosuser" element={<Productosuser />} />
        <Route path="/tiendasuser" element={<Tiendasuser />} />
        <Route path="/tiendauser" element={<Tiendauser />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/tarjeta" element={<Tarjeta />} />
      </Routes>
    </Router>
  );
}

export default App;
