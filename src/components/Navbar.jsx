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
      <ul className="links">
        <li><a href="r">home</a></li>
        <li><a href="r">Features</a></li>
        <li><a href="r">how it works</a></li>
        <li><button type="button">Login</button></li>
      </ul>
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

.links{
  display: none;
}
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

@media (min-width: 768px){
  padding: 5px 4.5rem;
  height: 72px;
  .menu-icon{
    display: none;
  }
  .links{
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 15px;

    button{
      font-size: 15px;
      font-weight: 500;
      line-height: 20px;
      color: white;
      border: none;
      padding: 6px 20px;
      border-radius: 4px;
      background-color: #3A87BE;;

    }

    a{
      text-decoration: none;
      font-size: 15px;
      font-weight: 500;
      line-height: 20px;
      color: white
    }
  }
}
`;
