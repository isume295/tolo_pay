import React from 'react';
import { styled } from 'styled-components';

export default function Hero() {
  return (
    <Section>

      <div className="hero">
        <div className="hero-content">
          <h1 className="headline">The new way of money transfer Tolopay</h1>
          <p className="tagline"> Pay anything anywhere easly</p>
          <button type="button" className="btn-signup">Create new Account</button>
        </div>
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
`;
