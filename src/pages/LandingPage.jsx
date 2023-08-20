import React from 'react';
import { styled } from 'styled-components';
import Navbar from '../components/Navbar';
import mobileImg from '../assets/mobile.png';
import Hero from '../components/Hero';

export default function LandingPage() {
  return (
    <Div mobileImg={mobileImg}>
      <div className="bg">
        <Navbar />
        <Hero />
      </div>
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
border-bottom-left-radius: 100px;
}
`;
