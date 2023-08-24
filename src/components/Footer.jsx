/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { styled } from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  return (
    <Section>
      <div className="footer-container">
        <div className="content">
          <h5 className="logo">ToloPay</h5>
          <ul className="list">
            <li>Pay anything  anywhere eaisly</li>
            <li className="contact">
              <a className="icon" href="f"><FacebookIcon /></a>
              <a className="icon" href="f"><TwitterIcon /></a>
              <a className="icon" href="f"><WhatsAppIcon /></a>

            </li>
          </ul>
        </div>
        <div className="content">
          <h5 className="title">Features</h5>
          <ul className="list">
            <li>Budget and planning</li>
            <li>QR payment</li>
            <li>Transaction</li>
          </ul>
        </div>
        <div className="content">
          <h5 className="title">Resources</h5>
          <ul className="list">
            <li>Help center</li>
            <li>Guides</li>
            <li>Transaction</li>

          </ul>
        </div>
        <div className="content">
          <h5 className="title">Company</h5>
          <ul className="list">
            <li>About us</li>
            <li>Testimonials</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
display: flex;
background: #1B2845;
justify-content: center;
align-items: center;
.footer-container{
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    gap: 30px;

    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .title {
    font-size: 28.292px;
    font-style: normal;
    font-weight: 500;
    line-height: 48.099px;
    color: #ffffff;
    }

    .logo {
      font-size: 32.254px;
      font-style: normal;
      font-weight: 700;
      line-height: 48.099px;
      color: #ffffff;
    }
     
    .list {
      display: flex;
      flex-direction: column;
      list-style: none;  
      color: #DDE0E2;
      justify-content: center;
      align-items: center;
      font-size: 15.806px;
      font-weight: 400;
      line-height: 27.69px;
      /* gap: 12px; */
    }

    .contact {
        display: flex;
        gap: 5px;
        font-size: 30px !important;
        color: white;
        padding-top: 12px;
    }

    .icon{
        color: white;
    }
}

@media (min-width: 768px){
  .footer-container{
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 7.5rem;
  }
   
}
`;
