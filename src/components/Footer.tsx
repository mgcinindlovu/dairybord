import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #000000;
  color: #ffffff;
  display: grid; /* Changed from grid to flex for easier responsiveness */
  flex-wrap: wrap; /* Allow wrapping of columns */
  justify-content: center;
  align-items: center;
  padding: 20px; /* Added padding for better spacing */
  font-family: "Marhey";

  @media (max-width: 768px) {
    flex-direction: column; /* Stack columns on smaller screens */
    text-align: center; /* Center text */
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px; /* Reduced gap for better spacing on smaller screens */
  align-items: center; /* Center items within each column */

  @media (max-width: 768px) {
    gap: 15px; /* Adjusted gap for smaller screens */
  }
`;

const Logo = styled.h3`
  color: #007bff;
  font-size: 24px;

  img {
    max-height: 50px; /* Control logo size */
  }
`;

const NavLinks = styled.nav<{ linkColor: string }>`
  display: flex;
  gap: 40px; /* Adjusted gap for spacing */
  justify-content: center; /* Center navigation links */

  a {
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

  @media (max-width: 768px) {
    flex-direction: column; /* Stack links vertically */
    gap: 10px; /* Adjust gap for smaller screens */
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 25px; /* Reduced gap for spacing */
  align-items: center;
  justify-content: center;
  margin-top: 20px; /* Adjusted margin for better spacing */
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
  margin: 20px 0; /* Added margin for spacing */
`;

const Footer: React.FC = () => {
  const fixedLinkColor = "#0044ff";
  return (
    <FooterContainer>
      {/* First Column - Logo and Description */}
      <Column>
        <Logo>
          <img src={logo} alt="MyBrand Logo" />
        </Logo>
      </Column>

      {/* Second Column - Navigation Links */}
      <Column>
        <NavLinks linkColor={fixedLinkColor}>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact Us</Link>
        </NavLinks>
      </Column>
      
      {/* Horizontal Line */}
      <StyledHr />
      
      {/* Third Column - Social Media Links */}
      <Column>
        <SocialContainer>
          <SocialLink href="https://www.facebook.com/profile.php?id=61573841184314" target="_blank">
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
