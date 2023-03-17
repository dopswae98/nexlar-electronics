import React from 'react';
import './LandingPage.css';
import footerpic from '../img/footerpic.png';
import TheNavbar from '../components/TheNavbar';

const LandingPage = () => {
  return (
    <div className='hero vh-100 bg-secondary '>
      <TheNavbar/>
      <div className="hero-section text-center text-white text-blue-100">
          <h6 className='text-uppercase'>skdfnsdbfnm</h6>
          <h1 className='text-uppercase'>hsgdjhfhfsjhdfjshdgfshdgfjsh</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae esse dolore doloremque optio ipsam dolorem ut! Quibusdam quod esse rerum quisquam, accusamus eligendi, dolorem, magni ipsam aliquam modi amet itaque.

          </p>
          <button className='btn btn-warning'>GET STARTED</button>
      </div>
      <div className="footer-section text-white container-fluid text-center pt-3">
      <div className="row">
        <div className="col left-col">
          <img src={footerpic} alt="" />
          dfsdfds
        </div>
        <div className="col" style={{}}>
         <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam nemo quas libero, quisquam recusandae ea blanditiis quo, numquam magni at architecto hic, voluptatum aperiam reprehenderit explicabo ullam deleniti excepturi.

         </h6>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default LandingPage