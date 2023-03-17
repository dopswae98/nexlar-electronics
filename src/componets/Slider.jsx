import React from "react";
import img1 from "../img/1.jpg";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";

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
          className="container"
          style={{ marginTop: "15px", bottom: "20px", position: "relative" }}
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
  ];
  return (
    <div className="container-fluid">
      <Slider {...settings}>
        {SData.map((item, index) => {
          return (
            <div
              className="d-flex container justify-content-between pt-3"
              key={index}
            >
              <div className="left my-auto">
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
                <button className="btn btn-warning">Visit Collection</button>
              </div>
              <div className="right">
                <img
                  src={item.cover}
                  alt=""
                  style={{ height: "50", width: "350px" }}
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
