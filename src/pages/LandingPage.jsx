import React from 'react';
import { styled } from 'styled-components';
import Navbar from '../components/Navbar';
import mobileImg from '../assets/mobile.png';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import HowItWorks from '../components/HowItWorks';
import Service from '../components/Service';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <Div mobileImg={mobileImg}>
      <div className="bg">
        <Navbar />
        <Hero />
      </div>
      <Feature />
      <HowItWorks />
      <Service />
      <Footer />
    </Div>
  );
}

const Div = styled.div`
width: 100%;
.bg{
width: 100%;
height: 100vh;
background-image: url(${mobileImg});
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
border-bottom-left-radius: 80px;
}
`;
