import React from "react";
//import AliceCarousel from "react-alice-carousel";
//import 'react-alice-carousel/lib/alice-carousel.css';

import img1 from "../img/1.jpg";

// .sliderimg{
//     width:100;
//     HEIGHT:300PX;
//     object-fit:cover;
// }

const AliceCarouselHero = () => {
  return (
    <div className="container-fluid">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img
          src={img1}
          alt="fnfnf"
          className="slideimg"
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
        <img
          src={img1}
          alt="fnfnf"
          className="slideimg"
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
      </AliceCarousel>
    </div>
  );
};

export default AliceCarouselHero;
