import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Discover from "../components/Discover";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import image3 from "../assets/young-woman-with-cocktail-yellow-background.jpg";
import image1 from "../assets/fun n fresh logo 1.png";
import image2 from "../assets/lyons-peanut-butter-logo 2.png";
import image5 from "../assets/lyons-quick-brew logo 1.png";
import image6 from "../assets/pkufo logo 1.png";
import image7 from "../assets/yummy.png";
import image8 from "../assets/steri.png";
import image9 from "../assets/steri1.png";
import image10 from "../assets/one.jpg";
import image11 from "../assets/Rectangle 68.jpg";
import image12 from "../assets/Rectangle 69.jpg";
import image13 from "../assets/Rectangle 70.jpg";

const AboutContainer = styled.div`
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
`;

const DivContainer = styled.div`
  margin-bottom: 40px; // Space between the two divs
`;

const SubTitle = styled.h3`
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 20px;

  font-family:'Marhey';
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; // Space between cards
  flex-wrap: wrap;
  cursor: pointer;
  font-family:'Marhey'; 
`;

const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 10px;
 
  width: 250px; // Default width for the card
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05); // Slightly enlarge on hover
  }
`;

const CardContainerDivOne = styled(CardContainer)`
  width: 150px;
  cursor: pointer;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const CardTitle = styled.h4`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const AboutUs: React.FC = () => {
  return (
    <AboutContainer id="about">
      <Header />
      <Title>About Us</Title>
      <Discover />

      {/* Combined Section */}
      <SectionContainer>
        {/* First Div with Heading and Cards */}
        <DivContainer>
          <SubTitle>Our Products</SubTitle>
          <CardsContainer>
            <CardContainerDivOne>
              <CardImage src={image1} alt="Card 1" />
            
            </CardContainerDivOne>
            <CardContainerDivOne>
              <CardImage src={image2} alt="Card 2" />
            
            </CardContainerDivOne>
            <CardContainerDivOne>
              <CardImage src={image5} alt="Card 3" />
              
            </CardContainerDivOne>
            <CardContainerDivOne>
              <CardImage src={image6} alt="Card 4" />
             
            </CardContainerDivOne>
            <CardContainerDivOne>
              <CardImage src={image7} alt="Card 5" />
             
            </CardContainerDivOne>
            <CardContainerDivOne>
              <CardImage src={image8} alt="Card 6" />
             
            </CardContainerDivOne>
            <CardContainerDivOne>
              <CardImage src={image9} alt="Card 7" />
             
            </CardContainerDivOne>
          </CardsContainer>
        </DivContainer>

        {/* Second Div with Heading and Cards */}
        <DivContainer>
          <SubTitle>Our Investors</SubTitle>
          <CardsContainer>
            <CardContainer>
              <CardImage src={image10} alt="Card 8" />
             
            </CardContainer>
            <CardContainer>
              <CardImage src={image11} alt="Card 9" />
              
            </CardContainer>
            <CardContainer>
              <CardImage src={image12} alt="Card 10" />
              
            </CardContainer>
            <CardContainer>
              <CardImage src={image13} alt="Card 11" />
             
            </CardContainer>
          </CardsContainer>
        </DivContainer>
      </SectionContainer>

      <Contact />
      <Footer />
    </AboutContainer>
  );
};

export default AboutUs;
