import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #000000;
  color: #ffffff;
  padding: 40px 160px;
  display: grid;
  font-family: "Marhey";
  text-align: center;
  justify-content:center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const Logo = styled.h3`
  color: #007bff;
  font-size: 24px;
`;



const ContactInfo = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
`;
const NavLinks = styled.nav<{ linkColor: string }>`
  display: flex;
  gap: 80px;


  a {
    margin-top: 15px;
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
  font-weight: 400;
    transition: color 0.3s ease-in-out;

    &:hover {
      text-decoration: underline;
      color: ${(props) => props.linkColor}; 
    }
  }
`;
const SocialContainer = styled.div`
  display: flex;
  gap: 45px;
  align-items: center;
  justify-content:center;
  margin-top: 50px;
`;

const SocialLink = styled.a`
  font-size: 22px;
  font-weight: 400;
  color: #ffffff;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #007bff;
  }
`;
const StyledHr = styled.hr`
  width: 100%;
  border: 1px solid #ffffff;
 
  opacity: 0.3;
`;

const Footer: React.FC = () => {
  const fixedLinkColor = "#0044ff";
  return (
    <FooterContainer>
      {/* First Column - Logo and Description */}
      <Column>
        <Logo>  <img src={logo} alt="MyBrand Logo" /> </Logo>
      
      </Column>

      {/* Second Column - Location */}
      <NavLinks linkColor={fixedLinkColor}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact Us</Link>
       
      </NavLinks>
       {/* Horizontal Line */}
      <StyledHr />
      {/* Third Column - Contact Information */}
      <Column>
       
     
      <SocialContainer>
      <SocialLink href="https://facebook.com" target="_blank">
        <FaFacebook />
      </SocialLink>
      <SocialLink href="https://instagram.com" target="_blank">
        <FaInstagram />
      </SocialLink>
      <SocialLink href="https://twitter.com" target="_blank">
        <FaTwitter />
      </SocialLink>
      <SocialLink href="https://google.com" target="_blank">
        <FaGoogle />
      </SocialLink>
    </SocialContainer>
      </Column>
    </FooterContainer>
  );
};

export default Footer;
