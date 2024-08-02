import React from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';
import './Carrusel.css';

const flickityOptions = {
  wrapAround: true,
  autoPlay: 2000,
  pauseAutoPlayOnHover: true,
  lazyLoad: 2,
  setGallerySize: false,
};

const Carrusel = () => {
  return (
    <div className="carousel-container">
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <div className="gallery-cell">1</div>
        <div className="gallery-cell">2</div>
        <div className="gallery-cell">3</div>
        <div className="gallery-cell">4</div>
        <div className="gallery-cell">5</div>
      </Flickity>
    </div>
  );
};

export default Carrusel;