import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import image3 from "../assets/pleased-dark-skinned-woman-holds-jars-organic-natural-yoghurt-ingredient-preparing-breakfast-concentrated-hat-toothy-smile-wears-green-t-shirt-people-healthy-nutrition-concept.jpg";

const ContactUsContainer = styled.div`
  display: grid;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 100;
  padding: 20% 0 0 5%;
  color: #ffffff;
  height: 50vh; // Keep this to control overall height
  flex-direction: column;
  align-items: center; // Adjust padding as needed
  background: url(${image3}) center center;
  background-size: 100%; // Reduced size of the background image
  background-repeat: no-repeat; // Prevents tiling
  font-family: "Marhey";
`;

const SectionContainer = styled.section`
  padding: 40px 10px;
  background-color: #f8f8f8; // Background color for the section
  text-align: center;
  font-family:'Marhey';

  h3{
    font-size: 28px;
  }
`;



const ContactUs: React.FC = () => {
  return (
    < ContactUsContainer id="contact">
      <Header />
      <Title>Contact Us</Title>
      <SectionContainer>
       < h3>We Would Love To Hear From You</h3>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </SectionContainer>
      <Contact />
      <Footer />
    </ContactUsContainer>
  );
};

export default ContactUs;
