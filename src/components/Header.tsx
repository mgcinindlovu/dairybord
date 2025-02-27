import React from "react";
import { Link } from "react-router-dom"; 
import styled from "styled-components";
import logo from "../assets/logo.png";

const HeaderContainer = styled.header`
  padding: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  gap: 80px;
  align-items: center;
  background: #ffffffd8;
  color: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  font-family: "Marhey", sans-serif;
  width: 100%;
  padding: 1rem 2rem;

  div{
    display: flex;
    gap: 20px;
  }
`;

const Logo = styled.img`
  height: 80px;
`;

const NavLinks = styled.nav<{ linkColor: string }>`
  display: flex;
  gap: 30px;


  a {
    margin-top: 15px;
    color: #283e7e;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s ease-in-out;

    &:hover {
      text-decoration: underline;
      color: ${(props) => props.linkColor}; 
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Button = styled(Link)<{ primary?: boolean }>`
   padding: 10px;
  font-size: 15px;
  color: white;
  background-color: #283E7E; 
  border: none;
  border-radius: 50px;
  text-decoration: none;
  border-radius: 35px;
  transition: all 0.3s ease-in-out;
  ${({ primary }) =>
    primary
      ? `
      padding: 10px  50px 0 50px;
  font-size: 15px;
  color: white;
  background-color: #283E7E; 
  border: none;
  border-radius: 50px;
    &:hover {
      background: transparent;
      color: #0044ff;
    }
  `
      : `
    padding: 10px  50px 0 50px;
  font-size: 15px;
  color: #283E7E;
  background-color: #ffffff; 
  border: 1px solid #283E7E ;
  border-radius: 50px;
    &:hover {
      background: #0044ff;
      color: white;
    }
  `}
`;

const Header: React.FC = () => {
  const fixedLinkColor = "#0044ff";

  return (
    <HeaderContainer>
      <Logo src={logo} alt="MyBrand Logo" />
      <div>
      <NavLinks linkColor={fixedLinkColor}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact Us</Link>
       
      </NavLinks>
      <ButtonsContainer>
        <Button to="/brands" primary>Our Brands</Button>
        <Button to="/about">Explore</Button>
      </ButtonsContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
