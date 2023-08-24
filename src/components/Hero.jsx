import React from 'react';
import { styled } from 'styled-components';
import img from '../assets/mobile-mock.png';

export default function Hero() {
  return (
    <Section>

      <div className="hero">
        <div className="hero-content">
          <h1 className="headline">
            The New and Smarter way of Money Transfer
            <span className="span-text"> Tolopay!!</span>
          </h1>
          <p className="tagline"> Pay anything anywhere easly</p>
          <button type="button" className="btn-signup">Create new Account</button>
        </div>
      </div>
      <div className="img-container">
        <img src={img} alt="img" />
      </div>
    </Section>
  );
}

const Section = styled.section`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
.hero{
    height: 75%;
    display: flex;
    justify-content: center;
    align-items:  center;

    .hero-content{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      display: inline-flex;
      padding:  0 24px;

      .headline{
        color: #fff;
        font-size: 38px;
        font-weight: 700;
        line-height: 52px;
      }

      /* .span-text{
        display: none;
      } */

      .tagline{
       font-size: 16px;
       font-weight: 400;
       line-height: 24px;
       color: #C3E8E4;
      }
      .btn-signup{
        padding: 12px 12px;
        background-color: #3A87BE;
        border-radius: 8px;
        border: none;
        font-size: 17px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 141.176% */
        letter-spacing: 0.51px;
        color: #fff;
      }
    }

}

.img-container{
display: none;
}

@media (min-width: 768px){
  padding: 0 4.5rem;
  flex-direction: row;
  .hero-content .headline {
  font-size: 48px !important;
  /* width: 100%; */
  .span-text {
    background: linear-gradient(118deg, #3A87BE 35.52%, rgba(84, 198, 170, 0.50) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
     font-size: 48px !important;
     font-weight: 700;
     line-height: 52px;
  }
}
.tagline{
  font-size: 20px !important;
  font-weight: 400;
  line-height: 28px;
}
  
   .hero{
    margin-top: 33px;
    width: 60%;
   }
   .img-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 37%;
    margin-top: 30px;
    img{
      width: 100%;
      height: auto;
    }
   }
}  

`;
