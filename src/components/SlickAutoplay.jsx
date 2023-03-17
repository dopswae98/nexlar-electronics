import React, { Component } from "react";
import Slider from "react-slick";

import img1 from "../img/1.jpg";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";

export default class SlickAutoplay extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const images = [
      {
        id: 1,
        src: "../img/1.jpg",
        alt: 'images1',
      },
      {
        id: 2,
        src: "../img/1.png",
        alt: 'images2',
      },
      {
        id: 3,
        src: "../img/3.png",
        alt: 'image3',
      },
      {
        id: 4,
        src: "../img/1.png",
        alt: 'image4',
      },
    ];

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div className="container-fluid">
        {" "}
        <h2>Auto Play & Pause with buttons</h2>{" "}
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          {
            images.map((image)=>{
                <div key={image.id}>
                    <img src={image.src} alt={image.alt} style={{height:'100px', width:'100px', margin:'auto'}} />
                </div>
            })
          }

          {/* {" "}
          <div>
            {" "}
            <h3>{img1}</h3>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3>2</h3>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3>3</h3>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3>4</h3>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3>5</h3>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3>6</h3>{" "}
          </div>{" "} */}
        </Slider>{" "}
        <div style={{ textAlign: "center" }}>
          {" "}
          <button className="button" onClick={this.play}>
            {" "}
            Play{" "}
          </button>{" "}
          <button className="button" onClick={this.pause}>
            {" "}
            Pause{" "}
          </button>{" "}
        </div>{" "}
      </div>
    );
  }
}
