import { Link } from 'react-router-dom';
import "./NavBar.css";

const Navbar = () => {


    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <img src="../img/pnologo.png" alt="Plattéa Logo" />
                    <span>PLATTÉA</span>
                </div>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Inicio</Link></li>
                        <li><Link to={'/tiendas'}>Tiendas</Link></li>
                        <li><Link to={'/productos'}>Productos</Link></li>
                        <li><Link to={'/categorias'}>Categorías</Link></li>
                    </ul>
                </nav>
                <div>
                    <Link to={'/login'} className="relogin">Iniciar Sesion</Link>
                    <Link to={'/register'} className="relogin">Registrarse</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;