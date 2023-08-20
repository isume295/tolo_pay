/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { styled } from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import img from '../assets/t-logo.svg';

function Navbar() {
  return (
    <Nav>
      <div className="logo">
        <div className="logo-container">
          <img src={img} alt="logo" />
        </div>
        <span className="logo-name">ToloPay</span>
      </div>
      <div className="menu-icon"><MenuIcon /></div>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
height: 50px;
width: 100%;
padding: 5px 20px;
display: flex;
justify-content: space-between;
align-items: center;

.logo{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  .logo-name{
    color: #ffffff;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
  }
}
.menu-icon{
  color: #ffffff;
}
`;
