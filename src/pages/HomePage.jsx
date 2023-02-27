import React from 'react'
import NaxlarNav2 from '../componets/NaxlarNav2'
import NaxlarNavbar3 from '../componets/NaxlarNavbar3'
import NaxlarTopNav from '../componets/NaxlarTopNav'

const HomePage = () => {
  return (
    <div>
        <section className="nav-section">
            <NaxlarTopNav/>
            {/* <NaxlarNavbar/> */}
            <NaxlarNav2/>
            <NaxlarNavbar3/>
            
        </section>
        <section className="hero-section">
           
        </section>
    </div>
  )
}

export default HomePage