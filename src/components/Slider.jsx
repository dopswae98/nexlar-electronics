import React from "react";
import img1 from "../img/1.jpg";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";

import slide1 from "../images/SlideCard/slide-1.png";
import slide2 from "../images/SlideCard/slide-2.png";
import slide3 from "../images/SlideCard/slide-3.png";
import slide4 from "../images/SlideCard/slide-4.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return (
        <ul
          className="container dots"
          style={{ marginTop: "-115px", position: "relative" }}
        >
          {dots}
        </ul>
      );
    },
  };

  const SData = [
    {
      id: 1,
      title: "jshfjdfkkd ks hdf ksjdh f",
      desc: "hdkjshdjhjdhsj jsh djhs d sjdh k",
      cover: img1,
    },
    {
      id: 2,
      title: "jshfjdfkkd ks hdf ksjdh f",
      desc: "hdkjshdjhjdhsj jsh djhs d sjdh k",
      cover: img2,
    },
    {
      id: 3,
      title: "jshfjdfkkd ks hdf ksjdh f",
      desc: "hdkjshdjhjdhsj jsh djhs d sjdh k",
      cover: img3,
    },
    {
      id: 4,
      title: "jshfjdfkkd ks hdf ksjdh f",
      desc: "hdkjshdjhjdhsj jsh djhs d sjdh k",
      cover: img4,
    },

    {
      id: 1,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: slide1,
    },
    {
      id: 2,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: slide2,
    },
    {
      id: 3,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: slide3,
    },
    {
      id: 4,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: slide4,
    },
  ];
  return (
    <div className="container-fluid">
      <Slider {...settings}>
        {SData.map((item, index) => {
          return (
            <div
              className="d-md-flex d-flex flex-md-row flex-column-reverse container justify-content-between pt-3"
              key={index}
            >
              <div className="left-text py-auto">
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
                <button className="btn btn-warning">Visit Collection</button>
              </div>
              <div className="right">
                <img
                  src={item.cover}
                  alt=""
                  style={{ height: "auto", width: "350px" }}
                  className="rounded"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlideCard;
