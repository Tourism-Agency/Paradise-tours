import React from 'react';
//import '../../App.css';
import Cards from '../js/home/Cards';
import HeroSection from '../js/home/HeroSection';
import Footer from '../js/home/Footer';
import ThemedExample from './chatbot';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
      <ThemedExample />
    </>
  );
}

export default Home;