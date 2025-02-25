import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const HeaderContainer = styled.header`
  padding: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  gap: 180px;
  align-items: center;
  background: #ffffffa6;
  color: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  font-family: "Marhey", sans-serif;
  width: 100%;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.nav<{ linkColor: string }>`
  display: flex;
  gap: 1.5rem;

  a {
    margin-top: 15px;
    color: #283E7E; // Fixed link color
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

const LoginButton = styled.button`
font-family: 'Marhey';
   padding:0.5rem 2rem;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: #283E7E; 
  border: 1px solid #283E7E;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    color: #283E7E;
    background-color: white; 
  }

  &:focus {
    outline: none;
  }
`;

const SignUpButton = styled.button`
font-family: 'Marhey';
   padding: 0.5rem 3rem;
  font-size: 16px;
  font-weight: 500;
  color: #283E7E;
  background-color: white; 
  border: 1px solid #283E7E;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    color: white;
    background-color: #283E7E; 
  }

  &:focus {
    outline: none;
  }
`;

const Header: React.FC = () => {
  const fixedLinkColor = "#0044ff"; // Set a fixed link color

  return (
    <HeaderContainer>
      <img src={logo} alt="MyBrand Logo" /> 
      <NavLinks linkColor={fixedLinkColor}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
       
        <a href="#services">Blog</a>
        <a href="#careers">Testimonials</a>
        <a href="#contact">Contact Us</a>
        <LoginButton>Our brands</LoginButton>
        <SignUpButton>Expore</SignUpButton>
      
      </NavLinks>
      
  
    </HeaderContainer>
  );
};

export default Header;
