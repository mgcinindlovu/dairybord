import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link
import image1 from "../assets/vegan-food-nutrition-concept-cheerful-dark-skinned-woman-with-curly-hair-holds-bottle-fresh-almond-milk.jpg";
import image3 from "../assets/young-woman-with-cocktail-yellow-background.jpg";
import image5 from "../assets/photo-pleased-afro-american-woman-stands-with-closed-eyes-holds-two-ice-creams.jpg";
import image6 from "../assets/pleased-dark-skinned-woman-holds-jars-organic-natural-yoghurt-ingredient-preparing-breakfast-concentrated-hat-toothy-smile-wears-green-t-shirt-people-healthy-nutrition-concept.jpg";

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  position: relative;
  overflow: hidden;
   padding: 0 50px 0 50px;

  @media (max-width: 1024px) {
    padding: 30px;
    flex-direction: column;
    text-align: left;
    justify-content: flex-start;
    align-items: left;
    height: auto;
    margin-top:10%; /* Allow height to be auto for smaller screens */
  }

  @media (max-width: 768px) {
    text-align: left;
    align-items: left;
  }
`;

const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  transition: all 0.5s ease-in-out;
`;

const LeftSection = styled.div`
  flex: 1;
  padding:0 20px;
  max-width: 400px;
  font-family: 'Marhey';
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Align text and button to the bottom */

  @media (max-width: 1024px) {
    max-width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    margin: 120px 0 0 0;
    max-width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  
  h1 {
    font-size: 50px;
    font-weight: 200;
    color: #fff;
    margin-bottom: 10px;

    @media (max-width: 1024px) {
      font-size: 80px; /* Adjust font size for medium screens */
      margin-right: 4rem;
    }

    @media (max-width: 768px) {
      font-size: 36px; /* Smaller font size for mobile */
   
    }
  }

  p {
    font-size: 18px;
    color: #ddd;
    margin-bottom: 20px;

    @media (max-width: 1024px) {
      font-size: 25px; /* Adjust font size for medium screens */
      
    }

    @media (max-width: 768px) {
      font-size: 16px; /* Smaller font size for mobile */
    }
  }
`;

const RightSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; 
  margin-top:10%;
  
@media (max-width: 1024px) {
  width: 100%;
    align-items: center;
    margin-left: 25%;
}
  @media (max-width: 678px) {
    width: 100%;
    align-items: center;
    margin-left: -1%;
  }
`;

const CardContainer = styled.div`
  margin: 20% 0 0 25%; /* Adjust the margin as necessary */
  display: flex;
  gap: 20px;
  z-index: 2;
  font-family: 'Marhey';

  @media (max-width: 1024px) {
    margin: 0 0 0 -25%; /* Adjust margin for medium screens */
    padding: 0;
    justify-content: center;
    align-self: center;
  }

  @media (max-width: 768px) {
    display: flex;
  
    align-self: center; /* Center the button on mobile */
 
  }

  @media (max-width: 375px) {
    align-self: center; 
    margin: 0 0 0 0.5%;
  }
`;

const Card = styled(motion.div)<{ isActive: boolean }>`
  font-size: 5px;
  font-weight: 100;
  width: 140px;
  height: 140px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, border 0.3s ease;
  border: ${({ isActive }) => (isActive ? "2px solid #283E7E" : "none")}; // Border for active card
  transform: ${({ isActive }) => (isActive ? "scale(1.05)" : "scale(1)")} ; // Slightly scale active card
&:hover {
    transform: scale(1.05);
    
}
  @media (max-width: 1024px) {
    width: 160px; /* Adjust card size for medium screens */
    height: 160px; /* Adjust card size for medium screens */
  }

  @media (max-width: 768px) {
    width: 60px; /* Smaller card size for mobile */
    height: 60px; /* Smaller card size for mobile */
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardTitle = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);

  @media (max-width: 1024px) {
    font-size: 14px; /* Adjust font size for medium screens */
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px; /* Adjust position as needed */
  left: 85%;
  transform: translateX(-50%);
  z-index: 3;
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Button = styled.button`
  padding: 3px;
  font-size: 15px;
  color: white;
  background-color: #283E7E; 
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: white; 
    color: #283E7E;
  }

  & svg {
    animation: ${pulse} 1.5s infinite; /* Add the pulse animation */
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  

  @media (max-width: 1024px) {
    align-self: center;  /* Adjust margin for medium screens */
  }

  @media (max-width: 768px) {
    align-self: center; /* Center the button on mobile */

  }
  @media (max-width: 1200px) {
    margin-left:20px;/* Center the button on mobile */

  }


  
`;

const Dot = styled.div<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#283E7E" : "rgb(255, 255, 255)")};
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  @media (max-width: 1024px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    margin-left: 0; /* Center pagination on mobile */
    width: 10px;
    height: 10px;
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 85%;
  width: 100%;
  gap: 40px;
  display: flex;
  transform: translateY(-50%);
  z-index: 2; /* Ensure arrows are above other content */

  @media (max-width: 1024px) {
    left: 75%; /* Adjust position for medium screens */
  }

  @media (max-width: 768px) {
    display: none; /* Hide arrows on smaller screens */
  }
`;

const Arrow = styled.button<{ isLeft?: boolean; isActive?: boolean }>`
  background: ${({ isLeft, isActive }) =>
    isActive ? (isLeft ? "#ffffff" :  "#283E7E") : isLeft ? "#ffffff" : "#283E7E"};
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 100;
  border-radius: 100%;
  color: ${({ isLeft, isActive }) =>
    isActive ? "#283E7E" : isLeft ? "#283E7E" : "#ffffff"};
  padding: 10px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.2s;

  &:hover {
    background-color: ${({ isLeft }) => (isLeft ? "#283E7E" : "#283E7E")};
    color: ${({ isLeft }) => (isLeft ? "#ffffff" : "#fcfcfc")};
  }

  &:active {
    transform: scale(0.9); /* Adds a slight press effect */
  }

  @media (max-width: 1024px) {
    font-size: 18px;
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
    font-size: 15px;
  }
`;

const ActionButton = styled.button`
  font-family: 'Marhey';
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  width: 150px;
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
    align-self: center; /* Center the button on mobile */
  }

  @media (max-width: 1024px) {
    align-self: center; /* Center the button on mobile */
  }
`;

type CardType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const cards: CardType[] = [
  { id: 1, title: "Milk", description: "Discover the benefits of fresh almond milk, packed with nutrients.", image: image1 },
  { id: 2, title: "Drinks", description: "Explore a variety of refreshing drinks to complement your meals.", image: image3 },
  { id: 3, title: "Yogurt", description: "Indulge in our creamy and delicious yogurt, perfect for breakfast.", image: image5 },
  { id: 4, title: "Mayonnaise", description: "Try our rich and flavorful mayonnaise for your favorite dishes.", image: image6 },
];

const titles = [
  "Milk, but better!",
  "Refreshing Drinks Await!",
  "Creamy Yogurt Delights!",
  "Rich Mayonnaise for Every Dish!",
];

const Slider = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0); // Default to the first card
  const [buttonVisible, setButtonVisible] = useState<number | null>(null); // Track which card's button is visible

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index);
    setButtonVisible(index); // Show the button when a card is clicked
  };

  const handleNext = () => {
    setSelectedCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setSelectedCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <Container>
      <Background
        style={{ backgroundImage: `url(${cards[selectedCardIndex].image})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <LeftSection>
        <h1>{titles[selectedCardIndex]}</h1>
        <p>{cards[selectedCardIndex].description}</p>
        <ActionButton>Learn More</ActionButton>
      </LeftSection>
      <RightSection>
        <CardContainer>
          {cards.map((card, index) => (
            <Card
              key={card.id}
              isActive={index === selectedCardIndex}
              onClick={() => handleCardClick(index)}
            >
              <CardImage src={card.image} alt={card.title} />
              <CardTitle>{card.title}</CardTitle>
              {buttonVisible === index && (
                <ButtonContainer>
                  <Link to="/brands">
                    <Button><FaEye /></Button>
                  </Link>
                </ButtonContainer>
              )}
            </Card>
          ))}
        </CardContainer>
        <ArrowContainer>
          <Arrow onClick={handlePrev} isLeft isActive={selectedCardIndex === 0}>
            <FaArrowLeft />
          </Arrow>
          <Arrow onClick={handleNext} isActive={selectedCardIndex === cards.length - 1}>
            <FaArrowRight />
          </Arrow>
        </ArrowContainer>
        <PaginationContainer>
          {cards.map((_, index) => (
            <Dot
              key={index}
              active={index === selectedCardIndex}
              onClick={() => setSelectedCardIndex(index)}
            />
          ))}
        </PaginationContainer>
      </RightSection>
    </Container>
  );
};

export default Slider;