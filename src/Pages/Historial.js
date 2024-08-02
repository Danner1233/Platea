import React from 'react';

import '../index.css';

import NavBar from '../Components/Layout/NavBar';
import Footer from '../Components/Layout/Footer';


const History = () => {
    return (
        <div className='body-history'>
            <NavBar />
            <div className="content-body">
                <h1 id="titulo">Historial de compra</h1>
                <div className="content-all">
                    <div className="content">
                        <img src="../Img/balon.png" alt="Balon  " />
                        <div className="content-product">
                            <div className="title-product">Balon</div>
                            <div className="mark">Golty</div>
                            <div className="store">fufol</div>
                        </div>
                    </div>
                    <div className="entregado">Entregado</div>
                </div>
                <div className="content-all">
                    <div className="content">
                        <img src="../Img/balon.png" alt="Plattéa Logo" />
                        <div className="content-product">
                            <div className="title-product">Balon</div>
                            <div className="mark">Golty</div>
                            <div className="store">fufol</div>
                        </div>
                    </div>
                    <div className="entregado">Entregado</div>
                </div>
                <div className="content-all">
                    <div className="content">
                        <img src="../Img/balon.png" alt="Plattéa Logo" />
                        <div className="content-product">
                            <div className="title-product">Balon</div>
                            <div className="mark">Golty</div>
                            <div className="store">fufol</div>
                        </div>
                    </div>
                    <div className="entregado">Entregado</div>
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default History;