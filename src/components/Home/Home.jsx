import React from 'react';
import useReadingProgress from '../GlobalStyles/Layout/CircularProgress/ProgressWatch';
import Hero from './Hero/Hero';
import './Home.scss';
import Services from './ServicesSection/Services';



const Home = () => {

  return (
    <section className='home-scroll-section'>
        <Hero />
        <Services />
        
    </section>
  )
}

export default Home