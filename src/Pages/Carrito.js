import React from 'react';
import NavBar from '../Components/Layout/NavBar';
import '../index.css';
import Footer from '../Components/Layout/Footer';
import { Link } from 'react-router-dom';

const Car = () => {
  return (
    <div className='body-Car'>
        <NavBar/>

      <div className="content-body">
        <div className="content-all">
          <div className="content">
            <img src='../img/logo (3).png' alt='' />
            <div className="content-product">
              <h1 className="title-product">Camion</h1>
              <p className="mark">renoul</p>
              <p className="store">carros hd</p>
            </div>
          </div>
          <div className="content-button">
            <div className="content-counter">
              <input type="button" defaultValue="-" />
              <div className="number">000</div>
              <input type="button" defaultValue="+" />
              <div className="precio">1000000000</div>
            </div>
            <form action method="post">
              <input type="image" src="../img/icons8-basura-50.png" alt="Eliminar" width="50px" height="50px" />
            </form>
          </div>
        </div>
        <div className="content-all">
          <div className="content">
            <img src="../img/logo (3).png" alt='' />
            <div className="content-product">
              <h1 className="title-product">Camion</h1>
              <p className="mark">renoul</p>
              <p className="store">carros hd</p>
            </div>
          </div>
          <div className="content-button">
            <div className="content-counter">
              <input type="button" defaultValue="-" />
              <div className="number">000</div>
              <input type="button" defaultValue="+" />
              <div className="precio">1000000000</div>
            </div>
            <form action method="post">
              <input type="image" src="../img/icons8-basura-50.png" alt="Eliminar" width="50px" height="50px" />
            </form>
          </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Metodos de Pago
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Tuple"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="SavvyCal"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Statamic"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
        <div className="pago">
          <div className="pagar">
            <Link to = "/tarjeta"><input type="button" defaultValue="Pagar" /></Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Car;