import React from "react";
import NaxlarNavbar from "../components/NaxlarNavbar";
//import Slider from '../components/HeroSlider'
import NaxlarNav2 from "./NaxlarNav2";
import NaxlarNavbar3 from "./NaxlarNavbar3";
import NaxlarTopNav from "./NaxlarTopNav";
import HeroSlider from "../components/HeroSlider";
import SlickAutoplay from "../components/SlickAutoplay";
import AliceCarouselHero from "../components/AliceCarouselHero";
import Slider from "../components/Slider";
import CategoryList from "./CategoryList";
import "./NaxlarHomepage.css";
import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
  config,
} from "../components/firebase.utils";
import FlashCard from "../components/FlashCard";
import FlashDeals from "../components/FlashDeals";

const HomePage = () => {
  return (
    <div className="homepage overflow-hidden">
      <section className="nav-section">
        <NaxlarTopNav />
        {/* <NaxlarNavbar/> */}
        <NaxlarNav2 />
        <NaxlarNavbar3 />
      </section>
      <section className="hero-section mx-auto">
        {/* <SlickAutoplay/>
            {/* <HeroSlider/> */}
        {/* <AliceCarouselHero/>  */}
        <div className="hero-part">
          <div className="row w-100">
            <div className="col-md-3 col-xs-6 d-md-block d-none left">
              <div className="category-list mt-3 h-100 box-shadow ms-2">
                <CategoryList />
              </div>
            </div>
            <div className="slider col-md-9 col-7 d-block homeSlide right-col ms-auto w-md-fit  border-md-0 ">
              <div className="">
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flashcard my-4 container">
        <FlashDeals />
      </section>

      <section className="limited my-4">
        <div className="container">
          <div className="row">
            <div
              className="col-md-3 col-12 bg-secondary py-2 d-flex me-md-4"
              style={{ height: "250px" }}
            >
              <h6 className="fw-bold">30% OFF</h6>
              <div className="shop-now align-self-end d-flex justify-content-center flex-column align-items-center">
                <h6 className="mx-auto align-self-start">FLASH DEALS</h6>
                <button className="btn btn-warning rounded-pill mb-4">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="col-md-8 col-12 bg-dark ms-md-5 ">
              <div className=" text-white d-flex flex-column align-items-end  p-3">
                <h1 className="fw-bold">Minimal Light Bulb</h1>
                <h3>Limited Edition Sale</h3>
                <h1 className="fw-bold">$45</h1>
                <button className="btn btn-warning rounded-pill">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="advert my-5">
        <div className="container-fluid">
          <div className=" row gy-3 ">
            <div className="ad-box col-md-2 col-5 mx-auto mx-md-auto py-3 advert2 me-3 me-md-1 d-flex flex-column align-items-center justify-content-center">
              <div
                className="icon mt-3 rounded-circle bg-light align-items-center d-flex justify-content-center"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="fas fa-truck fs-4"></i>
              </div>
              <h6 className="fw-bold my-2">World Delivery</h6>
              <p>
                We offer competirive prices on our 10 million plus product any
                range
              </p>
            </div>
            <div className="ad-box col-md-3 col-5 mx-md-auto mx-auto me-md-1 py-3 me-3 advert2 d-flex flex-column align-items-center justify-content-center">
              <div
                className="icon mt-2 rounded-circle bg-light align-items-center d-flex justify-content-center"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="fas fa-tv fs-4"></i>
              </div>
              <h6 className=" fw-bold my-2">World Delivery</h6>
              <p>
                We offer competirive prices on our 10 million plus product any
                range
              </p>
            </div>
            <div className="ad-box col-md-3 col-5 mx-auto mx-md-auto py-3 me-3 me-md-0 advert2 d-flex flex-column align-items-center justify-content-center">
              <div
                className="icon mt-2 rounded-circle bg-light align-items-center d-flex justify-content-center"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="fas fa-umbrella fs-4"></i>
              </div>
              <h6 className="fw-bold my-2">World Delivery</h6>
              <p>
                We offer competirive prices on our 10 million plus product any
                range
              </p>
            </div>
            <div className="ad-box col-md-2 col-5 mx-auto mx-md-auto py-3 advert2 d-flex flex-column align-items-center justify-content-center">
              <div
                className="icon mt-2 rounded-circle bg-light align-items-center d-flex justify-content-center"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="fas fa-server fs-4"></i>
              </div>
              <h6 className="fw-bold my-2">World Delivery</h6>
              <p className="">
                We offer competirive prices on our 10 million plus product any
                range
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="footer h-75 bg-dark">
        <div className="container-fluid mx-md-5 px-md-5 py-5">
          <div className="row">
            <div className="col-md-5 text-white">
              <h5 className="text-white fw-bold">Naxlar Acc</h5>
              <p className="text-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolores nisi eveniet dicta velit eaque quos inventore illo aut
                cumque. Architecto.
              </p>
              <div className="buttons">
                <button className="btn btn-light me-4 rounded-pill">
                  <span>
                    <i className="fab fa-google-play me-1"></i>
                  </span>
                  Google Play
                </button>

                <button className="btn btn-light rounded-pill">
                  <span>
                    <i className="fab fa-app-store me-1"></i>
                  </span>
                  App Store
                </button>
                <div className="social mt-3">
                  <p>FOLLOW US</p>
                  <div className="social-icons d-flex fs-4 mb-md-0 mb-4">
                    <i className="fab fa-facebook me-3"></i>
                    <i className="fab fa-twitter me-3"></i>
                    <i className="fab fa-linkedin me-3"></i>
                    <i className="fab fa-instagram me-3"></i>
                    <i className="fab fa-youtube"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <h6 className="text-white fw-bold">About Us</h6>
              <ul className="text-muted list-unstyled ">
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Careers</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className="col">
              <h6 className="text-white fw-bold">Customer Care</h6>
              <ul className="text-muted list-unstyled ">
                <li>Help Center</li>
                <li>How to buy</li>
                <li>Track Your Order</li>
                <li>Corporate & Bulk Purchasing</li>
                <li>Returns & Refunds</li>
              </ul>
            </div>
            <div className="col me-5">
              <h6 className="text-white fw-bold">Contact Us</h6>
              <ul className="text-muted list-unstyled ">
                <li>
                  70 Washington Square South new York, NY 10012, United States
                </li>
                <li>Email:wholelight@gmail.com</li>
                <li>Phone:+26378348343</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
