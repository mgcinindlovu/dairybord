import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

const HeaderContainer = styled.header`
  padding: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  gap: 180px;
  align-items: center;
  background: #ffffffd8;
  color: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  font-family: "Marhey", sans-serif;
  width: 100%;
 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

const Logo = styled.img`
  height: 80px;

  @media (max-width: 768px) {
    height: 60px;
  }
`;

const NavLinks = styled.nav<{ linkColor: string; isOpen: boolean }>`
  display: flex;
  gap: 30px;
  flex-direction: row;

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
  .btn{
      color:white;
    }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    width: 100%;
    margin-top: 10px;
  }
`;

const Hamburger = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  z-index: 20;
margin-left:5%;
  div {
    width: 30px;
    height: 3px;
    background: #283e7e;
    margin: 5px 0;
    transition: all 0.3s ease;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    div:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    div:nth-child(2) {
      opacity: 0;
    }
    div:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  `}

  @media (max-width: 768px) {
    display: flex;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Button = styled(Link)<{ primary?: boolean }>`
  padding:10px 20px;
  font-size: 15px;
  color: white;
  background-color: ${({ primary }) => (primary ? "white" : "#283E7E")};
  border: ${({ primary }) => (primary ? "1px solid #283E7E" : "none")};
  border-radius: 35px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  color: ${({ primary }) => (primary ? "#283E7E" : "white")};

  &:hover {
    background: ${({ primary }) => (primary ? "#0044ff" : "transparent")};
    color: ${({ primary }) => (primary ? "white" : "#0044ff")};
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;

    &:first-child {
      margin-bottom: 10px;
    }
  }
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fixedLinkColor = "#0044ff";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="MyBrand Logo" />
      <Hamburger onClick={toggleMenu} isOpen={isOpen}>
        <div />
        <div />
        <div />
      </Hamburger>
      <div>
        <NavLinks linkColor={fixedLinkColor} isOpen={isOpen}>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact Us</Link>
          <ButtonsContainer>
          <Button className="btn"  to="/brands">Our Brands</Button>
          <Button to="/about" primary>Explore</Button>
         
        </ButtonsContainer>
        </NavLinks>
        
      </div>
    </HeaderContainer>
  );
};

export default Header;
