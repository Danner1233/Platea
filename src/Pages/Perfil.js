import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import NavBar from '../Components/Layout/NavBar';

const Profile = () => {
    return (
        <div className="body-Profile">
            <NavBar/>
            <main className="main-perfil">
                <section className="profile-perfil">
                    <img src="../img/fonfooof.jpeg" alt="Banner" className="banner-perfil" />
                    <div className="profile-info-perfil">
                        <div className="profile-picture-perfil">
                            <img src="../img/logo (13).png" alt="Jose Espinela Ayala" />
                        </div>
                        <h1 className="name-perfil">Jose Espinela Ayala</h1>
                        <div className="contact-info-perfil">
                            <p><strong>Información:</strong></p>
                            <p>Contacto: 3127982938</p>
                            <p>Correo: jose@example</p>
                        </div>
                        <div className="cubiculo-perfil">
                            <p><strong>Cubículo:</strong></p>
                            <div className="cubiculo-name-perfil">Pelixflix</div>
                        </div>
                        <div className="social-media-perfil">
                            <Link to="#"><img src="path_to_instagram_icon.png" alt="Instagram" /></Link>
                            <Link to="#"><img src="path_to_twitter_icon.png" alt="Twitter" /></Link>
                            <Link to="#"><img src="path_to_facebook_icon.png" alt="Facebook" /></Link>
                            <Link to="#"><img src="path_to_pinterest_icon.png" alt="Pinterest" /></Link>
                        </div>
                    </div>
                    <div className="products-perfil">
                        <h2 className="products-title-perfil">Productos:</h2>
                        <div className="product-list-perfil">
                            <div className="product-item-perfil">
                                <img src="../pnologo.png" alt="Producto de Cine" />
                                <p>Producto de Cine</p>
                                <p>$0.000,00</p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

        </div>

    );
};

export default Profile;