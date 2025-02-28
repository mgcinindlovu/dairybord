import React, { useState } from "react";
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
  margin-top: 10%;
  font-size: 2.5rem;
  font-weight: 100;
  padding: 10% 0 0 5%;
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
  font-family: 'Marhey';
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; // Space between cards
  flex-wrap: wrap;
  cursor: pointer;
  font-family: 'Marhey'; 
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh; /* Set a maximum height */
  overflow-y: auto; /* Enable vertical scrolling */
  text-align: center;
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 50vh; /* Set a maximum height for the image */
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background: #283e7e;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #1f2c5a;
  }
`;

const AboutUs: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInvestor, setSelectedInvestor] = useState<{ title: string; description: string; image: string } | null>(null);

  const investors = [
    { id: 1, title: "Investor 1", description: "Investor 1 has been a key player in the dairy industry, providing valuable insights and investments to help us grow.", image: image10 },
    { id: 2, title: "Investor 2", description: "Investor 2 brings a wealth of experience and has been instrumental in our expansion into new markets.", image: image11 },
    { id: 3, title: "Investor 3", description: "Investor 3's strategic investments have enabled us to innovate and improve our product offerings.", image: image12 },
    { id: 4, title: "Investor 4", description: "Investor 4 has a deep understanding of the dairy industry and has helped us achieve significant milestones.", image: image13 },
  ];

  const handleCardClick = (investor: { title: string; description: string; image: string }) => {
    setSelectedInvestor(investor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedInvestor(null);
  };

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
            {investors.map((investor) => (
              <CardContainer key={investor.id} onClick={() => handleCardClick(investor)}>
                <CardImage src={investor.image} alt={investor.title} />
              </CardContainer>
            ))}
          </CardsContainer>
        </DivContainer>
      </SectionContainer>

      <Contact />
      <Footer />

      {isModalOpen && selectedInvestor && (
        <ModalOverlay>
          <ModalContent>
            <ModalImage src={selectedInvestor.image} alt={selectedInvestor.title} />
            <h3>{selectedInvestor.title}</h3>
            <p>{selectedInvestor.description}</p>
            <CloseButton onClick={handleCloseModal}>Close</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </AboutContainer>
  );
};

export default AboutUs;