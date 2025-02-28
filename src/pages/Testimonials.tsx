import React from "react";
import styled from "styled-components";
import heroImage from "../assets/photo-pleased-afro-american-woman-stands-with-closed-eyes-holds-two-ice-creams.jpg";
import infoImage from "../assets/image.jpg";
import card6 from '../assets/pexels-adrienne-andersen-1174503-2661255.jpg';
import card1 from '../assets/pic4.jpg';
import card2 from '../assets/pic3.jpg';
import card3 from '../assets/young-black-surprised-woman-with-open-mouth.jpg';
import card4 from '../assets/pic1.jpg';
import card5 from '../assets/pic2.jpg';
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const TestimonialsContainer = styled.div`
  font-family: "Marhey";
  display: grid;
`;

/* ====== HERO SECTION ====== */
const HeroSection = styled.section`
  height: 80vh;
margin-top:-80px;
  h3 {
    font-size: 2.5rem;
    font-weight: 100;
    padding: 10% 0 0 5%;
    color: #ffffff;
    height: 80vh;
    flex-direction: column;
    align-items: center;
    background: url(${heroImage}) center center;
    background-size: 100%;
    background-repeat: no-repeat;
    font-family: "Marhey";
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 2rem;
      padding: 80% 0 0 5%;
    }
  }
`;

/* ====== INFO SECTION ====== */
const InfoSection = styled.section`
  height: 50vh;
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 30px;
  margin-top: 250px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 120px;
  }
`;

const LeftText = styled.div`
  flex: 1;
  display: grid;

  h3 {
    font-size: 2rem;
    color: #000000;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const RightImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const InfoImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

/* ====== CARDS SECTION ====== */
const CardsSection = styled.section`
  text-align: center;
  padding: 50px;

  h3 {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    padding: 30px;
    margin-top:100px;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
  padding-top: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div<{ active?: boolean }>`
  background: ${({ active }) => (active ? '#283e7e' : '#fff')}; 
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s, background-color 0.3s; 
  cursor: pointer;

  &:hover {
    background: #1e2f5d;
    transform: scale(1.05);
  }

  h4 {
    color: ${({ active }) => (active ? '#fff' : '#000')};
  }

  span {
    font-size: 60px;
  }

  div {
    display: flex;
    gap: 10px;
  }

  div p {
    font-size: 18px;
    color: #000000;
    margin-left: 150px;
  }

  @media (max-width: 768px) {
    div p {
      margin-left: 0;
    }
  }
`;

const CardImage = styled.img`
  width: 20%;
  border-radius: 100%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 30%;
  }
`;

const CardTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Button = styled.button`
  font-family: 'Marhey';
  padding: 0.5rem 2rem;
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

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0.4rem 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

// Testimonials Component
const Testimonials: React.FC = () => {
  const [activeCard, setActiveCard] = React.useState<number | null>(null);

  return (
    <TestimonialsContainer>
      {/* Hero Section */}
      <HeroSection>
        <h3>Testimonials</h3>
      </HeroSection>

      {/* Info Section */}
      <InfoSection>
        <RightImage>
          <InfoImage src={infoImage} alt="Happy customer" />
        </RightImage>
        <LeftText>
          <h3>We Are The Best</h3>
          <p>
            Dairibord Limited Holdings, the best dairy product provider in Zimbabwe, loved by customers countrywide.
          </p>
          <ButtonContainer>
            <Button>Our Brands</Button>
          </ButtonContainer>
        </LeftText>
      </InfoSection>

      {/* Cards Section */}
      <CardsSection>
        <h3>Customer Testimonials</h3>
        <CardsContainer>
          <Card
            active={activeCard === 0}
            onMouseEnter={() => setActiveCard(0)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div><p><FaQuoteLeft /></p></div>
            <CardDescription>
              "I survived my exams thanks to Chimombe. Midnight study sessions were a breeze!"
            </CardDescription>
            <div><CardImage src={card1} alt="Customer 1" />
              <CardTitle>Tino Chikanga</CardTitle>
            </div>
          </Card>
          <Card
            active={activeCard === 1}
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div><p><FaQuoteLeft /></p></div>
            <CardDescription>
            
              "No weekend is complete without my Fun ‘n Fresh cocktail mix. 10/10, no notes!"
            </CardDescription>
            <div> <CardImage src={card2} alt="Customer 2" />
            <CardTitle>Kudzai Muzembi</CardTitle></div>
          </Card>
          <Card
            active={activeCard === 2}
            onMouseEnter={() => setActiveCard(2)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div><p><FaQuoteLeft /></p></div>
            <CardDescription>
            
              "Dairibord’s NutriYoghurt is my go-to snack before gym! Tastes amazing & keeps me full!"
            </CardDescription>
            <div><CardImage src={card3} alt="Customer 3" />
            <CardTitle>Michelle Ngwenya</CardTitle></div>
          </Card>
          <Card
            active={activeCard === 3}
            onMouseEnter={() => setActiveCard(3)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div><p><FaQuoteLeft /></p></div>
            <CardDescription>
            
              "Quick Brew is my go-to for every busy morning. It’s the perfect blend of smooth and energizing—can't start the day without it!"
            </CardDescription>
            <div><CardImage src={card4} alt="Customer 4" />
            <CardTitle>Casey Chikanga</CardTitle></div>
          </Card>
          <Card
            active={activeCard === 4}
            onMouseEnter={() => setActiveCard(4)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div><p><FaQuoteLeft /></p></div>
            <CardDescription>
              "Chimombe milk makes everything better. It’s my daily essential!"
            </CardDescription>
            <div>
            <CardImage src={card5} alt="Customer 5" />
            <CardTitle>Sam Tembo</CardTitle>
            </div>
          </Card>
          <Card
            active={activeCard === 5}
            onMouseEnter={() => setActiveCard(5)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div><p><FaQuoteLeft /></p></div>
            <CardDescription>
              "Yoghurt is my snack of choice—creamy, delicious, and always hits the spot!"
            </CardDescription>
            <div><CardImage src={card6} alt="Customer 6" />
            <CardTitle>Jane Ndlovu</CardTitle></div>
          </Card>
        </CardsContainer>
      </CardsSection>
      <Contact />
      <Footer />
    </TestimonialsContainer>
  );
};

export default Testimonials;
