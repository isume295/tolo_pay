import React from 'react';
import { styled } from 'styled-components';

export default function Service() {
  return (
    <Section>
      <div className="service-container">
        <h3 className="title">Best Payment Service For Your Transactions</h3>
        <p className="details">Make it easier for you to make any transaction through your mobile phone with ToloPay service</p>
        <a className="link" href="d">GET STARTED</a>
      </div>
    </Section>
  );
}

const Section = styled.section`
height: 75vh;
display: flex;
background: rgba(27, 40, 69, 0.60);
margin: 30px 24px;
border-radius: 20px;

.service-container{
height: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0 24px;
gap: 12px;

.title{
color: #FFF;
font-size: 38px;
font-weight: 700;
line-height: 52px; 
}

.details{
color: #C3E8E4;
font-size: 16px;
font-weight: 400;
line-height: 24px; 
}

.link{
text-decoration: none;
font-size: 16px;
font-weight: 500;
line-height: 24px; 
color: #E2F3FF;
}

}
`;
