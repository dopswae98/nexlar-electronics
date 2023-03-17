import React from 'react';
//import './firewood.css';

const Firewood = () => {
  return (
    <div>
    <section class="home" id="home">
        <div class="nav">
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="nav">
                <div class="container">
                    <a class="navbar-brand" href="#"><span class="text-warning"><i
                                class="fa-solid fa-trees me-2"></i>Jonney</span>Firewood</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" id="link" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" id="link" href="#aboutus">About US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" id="link" href="#projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" id="link" href="#contactus">Contacts</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    </section>

    
    <section>
        <div class="carol vh-50" id="carouselHero">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./img/logs1.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption " id="carousel-caption">
                            <h6 class="m-auto text-center">Welcome to JonneyFirewood store!</h6>
                            <p>
                                jjsjdhf
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./img/logs3.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block pb-5">
                            <h5>We provide quality wood products.</h5>
                            <p>Come and get the best wooden logs and firewood from us, we got you covered.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./img/logs1.jpg" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block pb-5 ">
                            <h5>We provide quality wood products.</h5>
                            <p> Come and get the best wooden logs and firewood from us, we got you covered.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    </section>

    

    <section class="p-2 bg-white">
        <div class="background bg-light">
            <div class="container text-center p-5">
                <div class="header">
                    <h1 class="featurette-heading">We have a wide range of wooden products.</h1>
                    <p class="lead">Scroll down and browse the products we have.</p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row mt-3">
                <div class="col-lg-4 col-md-6 col-sm-6 mx-auto py-4">
                    <h2 class="text-center">Quality Firewood</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, inventore ipsam alias veritatis,
                        minima doloribus, molestias quia voluptate explicabo quam laboriosam asperiores adipisci et
                        aliquam
                        nulla blanditiis suscipit provident ex?

                    </p>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 mx-auto">
                    <img src="./img/firewood1.jpg" alt="" class="rounded img-fluid" />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-4 col-md-6 col-sm-6 mx-auto">
                    <img src="./img/firewood2.jpg" alt="" class="rounded img-fluid" />
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 mx-auto py-4">
                    <h2 class="text-center">Quality Firewood</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, inventore ipsam alias veritatis,
                        minima doloribus, molestias quia voluptate explicabo quam laboriosam asperiores adipisci et
                        aliquam
                        nulla blanditiis suscipit provident ex?

                    </p>
                </div>

            </div>

    
        </div>
    </section>

    

    <section id="section" class="pt-5 pb-5 ">
        <h6 class="text-center text-primary">ABOUT US</h6>
        <div class="container">
            <div class="row">
                <div class="col-md-10 m-auto text-center" data-aos="fade-up">
                    <h2>ABOUT US</h2>
                    <p class=" pt-3">We are a firewood production company with over 15 years experince with a lot of
                        products ranging
                        from wooden logs, firewood, wooden blocks and we supply both local and international markets. We
                        support the environment by planting over 200
                        trees per year 75% of them including gum trees and 25% being other tree family groups. We offer
                        both bulk wood supply and also small volumes as per order prioritising the customer interest as
                        our main priority.
                    </p>
                </div>
            </div>

            <div class="row bg-white pt-5 " data-aos="fade-up">
                <div class="col-lg-3 col-sm-6 text-center align-items-center p-3" data-aos="fade-up">
                    <div class=" service card-effect h-5">
                        <div class="iconbox mx-auto mb-3">
                            <i class="fa-duotone fa-truck-container"></i>
                        </div>
                        <h5>Fast Delivery</h5>
                        <p>Quick delivery to local clients and efficient transport arrangements to our international
                            clients.</p>

                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 text-center align-items-center p-3" data-aos="fade-up">
                    <div class=" service card-effect h-5 pb-5">
                        <div class="iconbox mx-auto mb-3">
                            <i class="fa-duotone fa-thumbs-up"></i>
                        </div>
                        <h5>Satisfaction</h5>
                        <p>Our main goal is key goal is to get you satisfied and get you the best wood products.
                        </p>

                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 text-center align-items-center p-3" data-aos="fade-up">
                    <div class=" service card-effect">
                        <div class=" iconbox mx-auto mb-3">
                            <i class="fa-duotone fa-handshake"></i>
                        </div>
                        <h5>Team Work</h5>
                        <p>We work together hand in hand with our clients through the transportation process.</p>

                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 text-center align-items-center p-3" data-aos="fade-up">
                    <div class=" service card-effect ">
                        <div class=" iconbox mx-auto pt-3 mb-3">
                            <i class="fa-duotone fa-seedling"></i>
                        </div>
                        <h5>Enviro-friendly</h5>
                        <p>We support our environmentby planting over 200 well maintained plants each year.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </section>


    
    <section id="projects" class="h-100vh m-1">

        <div class="container py-4">
            <div class="row ">
                <div class="col-md-8 mx-auto text-center">
                    <h6 class="text-primary">PROJECTS</h6>
                    <h1>Our Recent Work</h1>
                    <p>We
                        have been able to offer a wide range of products from custom cutting to delivery. Our goal is to
                        get
                        the job done right. Below are some of the projects and the wooden products we offer.</p>

                </div>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="./img/firewood1.jpg" alt="" class="rounded "/>
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">We have smooth burning firewood.</h4>
                                <h6 class="text-white">That suits your needs</h6>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="./img/logs1.jpg" alt="" class="rounded "/>
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Bulk woodlogs of different sizes.</h4>
                                <h6 class="text-white">For your construction</h6>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="./img/chimn.jpg" alt="" class="rounded"/>
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Firewood for fire places.</h4>
                                <h6 class="text-white">Stay warm</h6>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="./img/pexels-lorenzo-pacifico-629138.jpg" alt="" class="rounded"/>
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Wooden Logs for agricutural projects.</h4>
                                <h6 class="text-white">Enhance your Agric facilities</h6>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="./img/pexels-pixabay-235964.jpg" alt="" class="rounded"/>
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">We provide wooden products of any size.</h4>
                                <h6 class="text-white">To suite your needs</h6>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="./img/pexels-jens-mahnke-776113.jpg" alt="" class="rounded"/>
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Firewood for your camping and adventure events.</h4>
                                <h6 class="text-white">Prefect your moments</h6>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


   
    <section id="features">
        <h6 class="text-primary text-center my-4">WHY CHOOSE US</h6>
        <div class="row w-100">
            <div class="col-lg-6 col-img"/>
                <img src="" alt=""/>
            </div>

            <div class="col-lg-6 pt-4">
                <div class="container">

                    <div class="row">
                        <div class="col-md-10 offset-md-1">

                            <h1>Best firewood and woodlogs for your home and business.</h1>
                            <p>We offer you a wide selection of premium quality wood logs and firewood for your home and
                                business
                                .Our logs are sourced from sustainable forests and are perfect for fireplaces,
                                woodstoves, construction, and processing into various products like tiles.
                                With our competitive prices and fast delivery, you can be sure to find the perfect
                                logs for your needs. Shop now and get your needs done.</p>

                            <div class="feature d-flex mt-5">
                                <div class="iconbox me-3 mt-4">
                                    <i class="fa-thin fa-truck-fast"></i>
                                </div>
                                <div>
                                    <h5>Fast Delivery</h5>
                                    <p>We have flexible conditions as we can provide fast and efficient transport
                                        for your wooden products to get them where you want them.
                                    </p>
                                </div>

                            </div>

                            <div class="feature d-flex mt-5">
                                <div class="iconbox me-3 mt-4">
                                    <i class="fa-thin fa-ballot-check"></i>
                                </div>
                                <div>
                                    <h5>Freedom of choice</h5>
                                    <p>We have a different kind of wooden products made from soft to hardwood,
                                        which provides you a an option to choose from a variety of products.
                                    </p>
                                </div>

                            </div>

                            <div class="feature d-flex mt-5">
                                <div class="iconbox me-3 mt-4">
                                    <i class="fa-thin fa-phone-rotary"></i>
                                </div>
                                <div>
                                    <h5>Free Consultation</h5>
                                    <p>our knowledgeble staff of wood experts are always available to
                                        answer any questions or concerns you may have about our products.
                                    </p>
                                </div>

                            </div>

                            <div class="feature d-flex mt-5">
                                <div class="iconbox me-3 mt-4">
                                    <i class="fa-thin fa-globe"></i>
                                </div>
                                <div>
                                    <h5>We Supply Global markets</h5>
                                    <p>With over 15 years of experince we supply our wooden products
                                        anywhere on the planet, we assist in arranging efficienttransport to delivery
                                        your products.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        
    </section>

    <section>
        <div class="container p-5">
            <div class="row">
                <div class="col-md-4 my-auto ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad qui, ab quo suscipit illo
                        tempora sequi blanditiis natus, modi aut laboriosam facilis praesentium doloremque voluptate
                        similique cum obcaecati rerum!</p>
                </div>
                <div class="col-md-8 lower-img  mx-auto">
                    {/*-<img src="./img/crew-8853502.jpg" alt="" class="img-fluid rounded">*/}
                </div>


            </div>

        </div>
    </section>
    
    <section class="contactus white h-100vh" id="contactus">
        <h6 class="text-primary text-center">CONTACT US</h6>
        <div class="container">
            <div class="row">
                <div class="col-md-6 m-auto text-center">
                    <h2>Contact US </h2>
                    <p>Our team is always readily available to your calls.</p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 m-auto">
                    <form action="#" class="p-4 mx-auto px-auto justify-content-center">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <input type="text" required placeholder="Your FirstName" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <input type="text" required placeholder="Your Surname" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <input type="email" required placeholder="Your Email" class="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <textarea rows="4" type="text" required placeholder="Message"
                                        class="form-control"></textarea>
                                </div>

                            </div>
                            <div class="col-md-12">
                                <button class="btn btn-sm btn-outline-warning btn-block col-md-12">Send Now</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
            </div>
    </section>

    
    <section class="footer-top bg-dark gy-4 mt-5 py-5">
        <div class="container">
            <div class="row text-center text-lg-start">
                <div class="col-md-4 text-white ">
                    {/*<!--<img src="" alt="" class="logo">-->*/}
                    <h2><span class="logo-color">Jonney</span>Firewood</h2>
                </div>
                <div class="col-md-2">
                    <h5 class="text-white">Brand</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h5 class="text-white">More</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">FAQ's</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Warrant</a></li>
                        <li><a href="#">Delivery</a></li>
                        <li><a href="#">Customer Service</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5 class="text-white ms-lg-5 ms-0 ">Contact</h5>
                    <ul class="list-unstyled">
                        <li class="text-md-start"><span class="text-info">Address: </span> Plot 14 Hunters close
                            Unmwinsdale Harare
                            Chishawasha, first right turn
                            after service station
                            before the tollgate

                        </li>
                        <li class="text-md-start"><span class="text-info">Email: </span> <a
                                href="mailto:lavmalachi@gmail.com">lavmalachi@gmail.com</a> </li>
                        <li class="text-md-start"><span class="text-info">Phone: </span>+(263)773072851</li>
                        <li class="text-md-start"><span class="text-info">Phone: </span>+(263)774155497</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    
    <section class="footer py-3 bg-light text-center ">
        <div class="container">
            <div class="footer-section row">
                <div class="col-md-6">
                    <rb/>
                        <p>&copy; 2023 <span class="text-warning"><i
                                    class="fa-solid fa-trees me-2"></i>Jonney</span>Firewood,
                            Inc. All rights reserved.</p>
                </div>

                <div class="social-iconss col-md-6">
                    <a class="link-white" href="#"><i class="fa-brands fa-facebook px-3"></i></a>
                    <a class="link-dark" href="#"><i class="fa-brands fa-instagram-square px-3"></i></a>
                    <a class="link-dark ms-1" href="#"><i class="fa-brands fa-twitter-square px-3"></i></a>
                </div>
            </div>

        </div>
        
    </section>
    </div>
  )
}

export default Firewood