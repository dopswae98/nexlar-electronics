import React from "react";
import Slider from "react-slick";
import flash1 from "../images/flash/flash-1.png";
import flash2 from "../images/flash/flash-2.png";
import flash3 from "../images/flash/flash-3.png";
import flash4 from "../images/flash/flash-4.png";
import flash5 from "../images/flash/flash-5.png";
import flash6 from "../images/flash/flash-1.png";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

const FlashCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    appendDots: (dots) => {
      return (
        <ul
          className="container"
          style={{ marginTop: "-115px", position: "relative" }}
        >
          {dots}
        </ul>
      );
    },
  };

  const Data = {
    productItems: [
      {
        id: 1,
        discount: 50,
        cover: flash1,
        name: "Shoes",
        price: 100,
      },
      {
        id: 2,
        discount: 40,
        cover: flash2,
        name: "Watch",
        price: 20,
      },
      {
        id: 3,
        discount: 40,
        cover: flash3,
        name: "Smart Mobile Black",
        price: 200,
      },
      {
        id: 4,
        discount: 40,
        cover: flash4,
        name: "Smart Watch Black",
        price: 50,
      },
      {
        id: 5,
        discount: 50,
        cover: flash5,
        name: "Shoes",
        price: 100,
      },
      {
        id: 6,
        discount: 50,
        cover: flash6,
        name: "Shoes",
        price: 100,
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {Data.productItems.map((productItems, i) => {
          return (
            <div className="box mx-2" key={i}>
              <div className="product">
                <div className="img">
                  <div className="top d-flex justify-content-between">
                    <span className="discount">
                      {productItems.discount}% Off{" "}
                    </span>

                    <div className="product-like mt-0 m-0 p-0">
                      <label htmlFor="">0</label> <br />
                      <i className="far fa-heart"></i>
                    </div>
                  </div>
                  <div className="imgs">
                    <img src={productItems.cover} alt="" className="imeg" />
                  </div>
                </div>
                <div className="product-details">
                  <h3 className="">{productItems.name}</h3>
                  <div className="rate d-flex">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price d-flex justify-content-between">
                    <h4>{productItems.price}.00</h4>
                    <button className="mt-0">
                      <i className="fa fa-plus "></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
