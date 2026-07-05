import React from 'react'
import Stats from './Stats';
import Awards from './Awards'
import Education from './Education'
import Pricing from './Pricing'
import Hero from './Hero'

import OpenAccount from '../../OpenAccount';
import Footer from '../../Footer';
import Navbar from '../../Navbar';

function HomePage() {
  return (<>
    <Navbar />
    <Hero />
    <Awards />
    <Stats />
    <Pricing />
    <Education />
    <OpenAccount />
    <Footer />

  </>);
}

export default HomePage;