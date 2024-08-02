import React, { useEffect, useRef } from 'react';
import "../index.css";
import NavBar from '../Components/Layout/NavBar';
import Footer from '../Components/Layout/Footer';

const Tiendauser = () => {
    const buttonsRef = useRef([]);
    const indicatorRef = useRef(null);
    const carItemsRef = useRef([]);

    useEffect(() => {
        const buttons = buttonsRef.current;
        const indicator = indicatorRef.current;
        const carItems = carItemsRef.current;

        const handleButtonClick = (button) => {
            buttons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');

            const rect = button.getBoundingClientRect();
            const containerRect = button.parentElement.getBoundingClientRect();
            indicator.style.left = `${rect.left - containerRect.left + rect.width / 2 - indicator.offsetWidth / 2}px`;

            const selectedBrand = button.getAttribute('data-brand');
            carItems.forEach(car => {
                if (car.getAttribute('data-brand') === selectedBrand) {
                    car.style.display = 'block';
                } else {
                    car.style.display = 'none';
                }
            });
        };

        buttons.forEach(button => {
            button.addEventListener('click', () => handleButtonClick(button));
        });

        const selectedButton = buttons.find(button => button.classList.contains('selected'));
        if (selectedButton) {
            const rect = selectedButton.getBoundingClientRect();
            const containerRect = selectedButton.parentElement.getBoundingClientRect();
            indicator.style.left = `${rect.left - containerRect.left + rect.width / 2 - indicator.offsetWidth / 2}px`;
        }
    }, []);

    return (
        <div className='body-Store'>
            <NavBar />
            <section className="banner">
                <h1>Cars World</h1>
            </section>
            <section className="brands">
                <div className="brand-logos">
                    <button className="brand-button selected" data-brand="nissan" ref={(el) => buttonsRef.current[0] = el}>
                        <img src="../img/logo (8).png" alt="Nissan" />
                    </button>
                    <button className="brand-button" data-brand="chevrolet" ref={(el) => buttonsRef.current[1] = el}>
                        <img src="../img/logo (6).png" alt="Chevrolet" />
                    </button>
                    <button className="brand-button" data-brand="renault" ref={(el) => buttonsRef.current[2] = el}>
                        <img src="../img/logo (7).png" alt="Renault" />
                    </button>
                    <button className="brand-button" data-brand="vw" ref={(el) => buttonsRef.current[3] = el}>
                        <img src="../img/logo (5).png" alt="VW" />
                    </button>
                    <button className="brand-button" data-brand="mercedes" ref={(el) => buttonsRef.current[4] = el}>
                        <img src="../img/logo (9).png" alt="Mercedes" />
                    </button>
                    <button className="brand-button" data-brand="suzuki" ref={(el) => buttonsRef.current[5] = el}>
                        <img src="../img/logo (10).png" alt="Suzuki" />
                    </button>
                    <div className="indicator" ref={indicatorRef} />
                </div>
            </section>
            <section className="car-list">
                <div className="car-item" data-brand="nissan" ref={(el) => carItemsRef.current[0] = el}>
                    <img src="../img/logo (4).png" alt="Nissan D22np300 Frontier 2.5" />
                    <p className="car-title">Nissan D22np300 Frontier 2.5</p>
                    <p className="car-brand">Nissan</p>
                    <p className="car-price">$ 60.000.000</p>
                </div>
                <div className="car-item" data-brand="nissan" ref={(el) => carItemsRef.current[1] = el}>
                    <img src="../img/logo (3).png" alt="Nissan March 1.6 Advance At" />
                    <p className="car-title">Nissan March 1.6 Advance At</p>
                    <p className="car-brand">Nissan</p>
                    <p className="car-price">$ 32.000.000</p>
                </div>
                <div className="car-item" data-brand="nissan" ref={(el) => carItemsRef.current[2] = el}>
                    <img src="../img/logo (4).png" alt="Nissan Qashqai 2.0 Exclusive" />
                    <p className="car-title">Nissan Qashqai 2.0 Exclusive</p>
                    <p className="car-brand">Nissan</p>
                    <p className="car-price">$ 102.000.000</p>
                </div>
                <div className="car-item" data-brand="chevrolet" ref={(el) => carItemsRef.current[3] = el}>
                    <img src="../img/logo (4).png" alt="Chevrolet Onix 1.4 LT" />
                    <p className="car-title">Chevrolet Onix 1.4 LT</p>
                    <p className="car-brand">Chevrolet</p>
                    <p className="car-price">$ 45.000.000</p>
                </div>
                <div className="car-item" data-brand="renault" ref={(el) => carItemsRef.current[4] = el}>
                    <img src="../img/logo (4).png" alt="Renault Duster 1.6 Dynamique" />
                    <p className="car-title">Renault Duster 1.6 Dynamique</p>
                    <p className="car-brand">Renault</p>
                    <p className="car-price">$ 55.000.000</p>
                </div>
                <div className="car-item" data-brand="mercedes" ref={(el) => carItemsRef.current[5] = el}>
                    <img src="../img/logo (4).png" alt="Mercedes Benz C200" />
                    <p className="car-title">Mercedes Benz C200</p>
                    <p className="car-brand">Mercedes</p>
                    <p className="car-price">$ 150.000.000</p>
                </div>
                <div className="car-item" data-brand="suzuki" ref={(el) => carItemsRef.current[6] = el}>
                    <img src="../img/logo (4).png" alt="Suzuki Swift 1.2 GLX" />
                    <p className="car-title">Suzuki Swift 1.2 GLX</p>
                    <p className="car-brand">Suzuki</p>
                    <p className="car-price">$ 30.000.000</p>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Tiendauser;
