import React from 'react';
import { styled } from 'styled-components';
import security from '../assets/lock-icon.svg';
import lock from '../assets/security-icon.svg';
import dollar from '../assets/money-icon.svg';

export default function Feature() {
  return (
    <Section>
      <h2 className="title">Features</h2>
      <div className="feature-content">

        <div className="cards">
          <div className="icon-container">
            <img src={security} alt="icon" />
          </div>
          <span className="feature">Keeping secrecy</span>
        </div>

        <div className="cards">
          <div className="icon-container">
            <img src={lock} alt="icon" />
          </div>
          <span className="feature">Keeping secrecy</span>
        </div>

        <div className="cards">
          <div className="icon-container">
            <img src={security} alt="icon" />
          </div>
          <span className="feature">Keeping secrecy</span>
        </div>

        <div className="cards">
          <div className="icon-container">
            <img src={dollar} alt="icon" />
          </div>
          <span className="feature">Keeping secrecy</span>
        </div>

        <div className="cards">
          <div className="icon-container">
            <img src={security} alt="icon" />
          </div>
          <span className="feature">Keeping secrecy</span>
        </div>

        <div className="cards">
          <div className="icon-container">
            <img src={dollar} alt="icon" />
          </div>
          <span className="feature">Keeping secrecy</span>
        </div>

      </div>
    </Section>
  );
}

const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
gap: 4rem;
margin: 70px 0;

.title{
font-size: 38px;
font-style: normal;
font-weight: 700;
line-height: 42px;
color: #172B4D;
}

.feature-content{
    display: flex;
    flex-direction: column;
    gap: 25px;
}
.cards{
width: 185px;
height: 199px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 16.61px;
align-items: center;
border: 2px solid;
border-image: linear-gradient(to right, #3A87BE, #54C6AA) 1;
color: rgba(23, 43, 77,0.9);
.feature{
text-align: center;
font-size: 16.057px;
font-weight: 500;
line-height: 20.586px;
width: 50%;
}
}

@media (min-width: 768px){
  .feature-content{
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 30px;
  }
}
`;
