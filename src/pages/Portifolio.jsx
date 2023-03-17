import React, { useState } from "react";
import TheNavbar from "../components/TheNavbar";

import "./portifolio.css";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";
import Medias from "./Media";
import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa';

import hireme from "../img/1.jpg";
import img1 from "../img/2.png";
import img2 from "../img/3.png";
import img3 from "../img/4.png";
import img4 from "../img/5.png";
import img5 from "../img/6.png";
import img6 from "../img/7.png";

const Portifolio = () => {
  const Media = Medias;

  console.log(Media);

  return (
    <div className="page bg-dark body-section">
      <section className="nav-bar bg-dark border-warning border border-top-0 border-start-0 border-end-0 sticky-top ">
        <TheNavbar />
      </section>
      <section className="hero-section">
        <div className="container pt-5 mt-5">
          <div className="row site-main container">
            <div className="col-lg-6 col-md-12 site-title text-white my-auto">
              <h3 className="title-text">Hey</h3>
              <h1 className="title-text text-uppercase">I am ephraim </h1>
              <h4 className="title-text text-uppercase">
                senior front-end developer
              </h4>
              <div className="site-buttons">
                <div className="d-flex flex-row flex-wrap">
                  <button
                    type="button"
                    className="btn button btn-primary me-4 text-uppercase"
                  >
                    hire me
                  </button>
                  <button
                    type="button"
                    className="btn button btn-outline-warning btn-secondary text-uppercase"
                  >
                    get cv
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 banner-image overflow-none">
              <img
                src={hireme}
                alt="HIRE ME"
                className="img-fluid"
                style={{ height: "300px", width: "auto" }}
              />
            </div>
          </div>
          <div className="row site-main container-fluid">
            <div className="col-lg-6 col-md-12 banner-image overflow-none">
              <img
                src={hireme}
                alt="HIRE ME"
                className="img-fluid"
                style={{ height: "300px", width: "auto" }}
              />
            </div>
            <div className="col-lg-6 col-md-12 site-title text-white my-auto">
              <h3 className="title-text text-uppercase">
                let me introduce myself{" "}
              </h3>
              <h4 className="title-text text-uppercase">
                senior front-end developer
              </h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
                cum dolores dolore molli.
              </p>
              <br />
              <p>
                Lorem ipsum dolor , repudiandae quis quia distinctio earum
                dolore ad minus deleniti quisquam alias hic unde maxime
                perferendis consequuntur, veritatis totam aspernatur. Vel,
                voluptatum.
              </p>
              <div className="site-buttons">
                <div className="d-flex flex-row flex-wrap">
                  <button
                    type="button"
                    className="btn button btn-primary me-4 text-uppercase"
                  >
                    download cv
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section page" className="pt-5 pb-5 text-white">
        <h6 className="text-center text-primary">ABOUT US</h6>
        <div className="container bg-dark">
          <div className="row ">
            <div className="col-md-10 m-auto text-center" data-aos="fade-up">
              <h2>ABOUT US</h2>
              <p className=" pt-3">
                We are a firewood production company with over 15 years
                experince with a lot of products ranging from wooden logs,
                firewood, wooden blocks and we supply both local and
                international markets. We support the environment by planting
                over 200 trees per year 75% of them including gum trees and 25%
                being other tree family groups. We offer both bulk wood supply
                and also small volumes as per order prioritising the customer
                interest as our main priority.
              </p>
            </div>
          </div>

          <div className="row bg-dark text-black pt-5 " data-aos="fade-up">
            <div
              className="col-lg-3 col-sm-6 text-center align-items-center p-3"
              data-aos="fade-up"
            >
              <div className=" service card-effect h-5">
                <div className="iconbox mx-auto mb-3">
                  <i
                    className="faRegular faTrashCan"
                    style={{ color: "black" }}
                  ></i>
                </div>
                <h5>Fast Delivery</h5>
                <p>
                  Quick delivery to local clients and efficient transport
                  arrangements to our international clients.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 text-center align-items-center p-3"
              data-aos="fade-up"
            >
              <div className=" service card-effect h-5 pb-5">
                <div className="iconbox mx-auto mb-3">
                  <i className="fa-duotone fa-thumbs-up"></i>
                </div>
                <h5>Satisfaction</h5>
                <p>
                  Our main goal is key goal is to get you satisfied and get you
                  the best wood products.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 text-center align-items-center p-3"
              data-aos="fade-up"
            >
              <div className=" service card-effect">
                <div className=" iconbox mx-auto mb-3">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <h5>Team Work</h5>
                <p>
                  We work together hand in hand with our clients through the
                  transportation process.
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 text-center align-items-center p-3"
              data-aos="fade-up"
            >
              <div className=" service card-effect ">
                <div className=" iconbox mx-auto pt-3 mb-3">
                  <i className="fa-duotone fa-seedling"></i>
                </div>
                <h5>Enviro-friendly</h5>
                <p>
                  We support our environmentby planting over 200 well maintained
                  plants each year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="h-100vh m-1">
        <div className="container py-4">
          <div className="row ">
            <div className="col-md-8 mx-auto text-center text-white">
              <h6 className="text-primary">PROJECTS</h6>
              <h1>Our Recent Work</h1>
              <p>
                We have been able to offer a wide range of products from custom
                cutting to delivery. Our goal is to get the job done right.
                Below are some of the projects and the wooden products we offer.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-sm-6">
              <div className="project">
                <img src={img2} alt="" className="rounded " />
                <div className="overlay">
                  <div>
                    <h4 className="text-white">
                      We have smooth burning firewood.
                    </h4>
                    <h6 className="text-white">That suits your needs</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="project">
                <img src={img3} alt="" className="rounded " />
                <div className="overlay">
                  <div>
                    <h4 className="text-white">
                      Bulk woodlogs of different sizes.
                    </h4>
                    <h6 className="text-white">For your construction</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="project">
                <img src={img4} alt="" className="rounded" />
                <div className="overlay">
                  <div>
                    <h4 className="text-white">Firewood for fire places.</h4>
                    <h6 className="text-white">Stay warm</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="project">
                <img src={img5} alt="" className="rounded" />
                <div className="overlay">
                  <div>
                    <h4 className="text-white">
                      Wooden Logs for agricutural projects.
                    </h4>
                    <h6 className="text-white">
                      Enhance your Agric facilities
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="project">
                <img src={img6} alt="" className="rounded" />
                <div className="overlay">
                  <div>
                    <h4 className="text-white">
                      We provide wooden products of any size.
                    </h4>
                    <h6 className="text-white">To suite your needs</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="project">
                <img src={img1} alt="" className="rounded" />
                <div className="overlay">
                  <div>
                    <h4 className="text-white">
                      Firewood for your camping and adventure events.
                    </h4>
                    <h6 className="text-white">Prefect your moments</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="h-100vh m-1">
        <div className="container py-4">
          <div className="row ">
            <div className="col-md-8 mx-auto text-center text-white">
              <h6 className="text-primary">PROJECTS</h6>
              <h1>Our Recent Work</h1>
              <p>
                We have been able to offer a wide range of products from custom
                cutting to delivery. Our goal is to get the job done right.
                Below are some of the projects and the wooden products we offer.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {Media.map((project, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div className="project">
                  <img src={project.img} alt="" className="rounded" />
                  <div className="overlay">
                    <div>
                      <h4 className="text-white">{project.header}</h4>
                      <h6 className="text-white">{project.subtext}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contactus white h-100vh" id="contactus">
        <h6 className="text-primary text-center">CONTACT US</h6>
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto text-center text-white">
              <h2>Contact US </h2>
              <p>Our team is always readily available to your calls.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 m-auto">
              <form
                action="#"
                className="p-4 mx-auto px-auto justify-content-center"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        required
                        placeholder="Your FirstName"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Surname"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <textarea
                        rows="4"
                        type="text"
                        required
                        placeholder="Message"
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button className="btn btn btn-outline-warning btn-block col-md-12">
                      Send Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="stay-connected mb-4">
            <div className="container text-center text-white ">
                <div className="bg-dark mx-4 pt-2 pb-1">
                    <h5 className="text-uppercase">stay connected</h5>
                    <p className="text-secondary ">Checkout our social media for regular updates from code MyWebsite</p>
                </div>
                <div className="social-icons mt-3">
                    <FaFacebook className="mx-4" size={25} color='blue'/>
                    <FaInstagram className="mx-4" size={25} color='pink'/>
                    <FaTwitter className="mx-4" size={25} color='blue'/>
                    <FaWhatsapp className="mx-4" size={25} color='light-green'/>
                </div>
            </div>
      </section>

      <footer className="text-white text-center bg-dark border border-warning border-start-0 border-end-0 ">
        <div className="container">
          <p className="bg-dark my-auto pt-3">
            Copyright &copy; All rights reserved | This template was made by{" "}
            <code>Ephraim Matarutse</code>{" "}
          </p>
          <div className="social-iconss">
            <a className="link-white" href="#">
              <i className="fa-brands fa-facebook px-3"></i>
            </a>
            <a className="link-dark" href="#">
              <i className="fa-brands fa-instagram-square px-3"></i>
            </a>
            <a className="link-dark ms-1" href="#">
              <i className="fa-brands fa-twitter-square px-3"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portifolio;
