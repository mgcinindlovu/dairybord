import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

const HeaderContainer = styled.header`
  padding: 10px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #ffffffd8;
  color: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  font-family: "Marhey";
  width: 100%;

  @media (max-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
 
    gap: 400px;
  }
`;

const Logo = styled.img`
  height: 80px;

  @media (max-width: 1024px) {
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

  .btn {
    color: white;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    width: 100%;
    position: fixed;
    top: 43%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
  }
`;

const Hamburger = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;

  div {
    width: 30px;
    height: 3px;
    background: #283e7e;
    margin: 5px 0;
    transition: all 0.3s ease;
  }

  @media (max-width: 1024px) {
    display: flex;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    div:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    div:nth-child(2) {
      opacity: 0;
    }
    div:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  `}
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 5px;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
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
      border: 1px solid #283E7E;
      border-radius: 50px;

      &:hover {
        background: #0044ff;
        color: white;
      }
    `}
  
  @media (max-width: 1024px) {
    width: 50%;
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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="MyBrand Logo" />
      <Hamburger onClick={toggleMenu} isOpen={isOpen}>
        <div />
        <div />
        <div />
      </Hamburger>
      <NavLinks linkColor={fixedLinkColor} isOpen={isOpen}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About Us</Link>
        <Link to="/blog" onClick={closeMenu}>Blog</Link>
        <Link to="/testimonials" onClick={closeMenu}>Testimonials</Link>
        <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        <ButtonsContainer>
          <Button className="btn" to="/brands" primary onClick={closeMenu}>Our Brands</Button>
          <Button to="/about" onClick={closeMenu}>Explore</Button>
        </ButtonsContainer>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;