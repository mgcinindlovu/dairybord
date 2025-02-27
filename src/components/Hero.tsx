import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight , FaEye } from "react-icons/fa";
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
  padding: 50px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

/* FULLSCREEN BACKGROUND IMAGE WITH POP-OUT ANIMATION */
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
  padding: 20px;
  max-width: 400px;
  font-family: 'Marhey';

  h1 {
    font-size: 50px;
    font-weight: 200;
    color: #fff;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    color: #ddd;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const RightSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Position relative for absolute children */
`;

const CardContainer = styled.div`
  margin: 37% 0 0 25%;
  display: flex;
  gap: 20px;
  z-index: 2;
  font-family: 'Marhey' ;
 
`;

const Card = styled(motion.div)<{ isActive: boolean }>`
 font-size: 5px;
 font-weight: 100;
  width: 150px;
  height: 150px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, border 0.3s ease;
  border: ${({ isActive }) => (isActive ? "2px solid #283E7E" : "none")}; // Border for active card
  transform: ${({ isActive }) => (isActive ? "scale(1.05)" : "scale(1)")} ; // Slightly scale active card
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
`;

// Button Container inside Card
const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px; /* Adjust position as needed */
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
`;

const Button = styled.button`
  margin-left: 100px;
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
`;

// Pagination Styles
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-left: 200px;
`;

const Dot = styled.div<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#283E7E" : "rgba(255, 255, 255, 0.5)")};
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 85%;
  width: 100%;
  gap: 40px;
  display: flex;
  transform: translateY(-50%);
  z-index: 2; /* Ensure arrows are above other content */
`;

const Arrow = styled.button<{ isLeft?: boolean; isActive?: boolean }>`
  background: ${({ isLeft, isActive }) =>
    isActive ? (isLeft ? "#ffffff" :  "#283E7E") : isLeft ? "##ffffff" : "##283E7E"};
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 100;
  border-radius: 100%;
  color: ${({ isLeft, isActive }) =>
    isActive ? "#283E7E" : isLeft ? "#283E7E" : "#283E7E"};
  padding: 10px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.2s;

  &:hover {
    background-color: ${({ isLeft }) => (isLeft ? "#283E7E" : "#283E7E")};
    color: ${({ isLeft }) => (isLeft ? "#ffffff" : "#fcfcfc")};
  }

  &:active {
    transform: scale(0.9); /* Adds a slight press effect */
  }
`;
const ActionButton = styled.button`
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




// Define the TypeScript type for a Card
type CardType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

// Define the array of cards with unique descriptions
const cards: CardType[] = [
  { id: 1, title: "Milk", description: "Discover the benefits of fresh almond milk, packed with nutrients.", image: image1 },
  { id: 2, title: "Drinks", description: "Explore a variety of refreshing drinks to complement your meals.", image: image3 },
  { id: 3, title: "Yogurt", description: "Indulge in our creamy and delicious yogurt, perfect for breakfast.", image: image5 },
  { id: 4, title: "Mayonnaise", description: "Try our rich and flavorful mayonnaise for your favorite dishes.", image: image6 },
];

// Additional titles to display based on selected cards
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
    setButtonVisible(index); // Show button for the clicked card
  };

  const handleDotClick = (index: number) => {
    setSelectedCardIndex(index); // Update card selection on dot click
    setButtonVisible(index); // Show button for the selected card
  };

  const handleNext = () => {
    setSelectedCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setButtonVisible(selectedCardIndex); // Keep the same button visible on next
  };

  const handlePrevious = () => {
    setSelectedCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    setButtonVisible(selectedCardIndex); // Keep the same button visible on previous
  };

  return (
    <Container>
      {/* Background Image when a card is selected */}
      <AnimatePresence>
        {selectedCardIndex >= 0 && (
          <Background
            key="background"
            initial={{ scale: 0, opacity: 0 }} // Start hidden
            animate={{ scale: 1, opacity: 1 }} // Scale up and fade in
            exit={{ scale: 0, opacity: 0 }} // Scale down and fade out
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ backgroundImage: `url(${cards[selectedCardIndex].image})` }}
          />
        )}
      </AnimatePresence>

      {/* Left Content Section (Text Updates Dynamically) */}
      <LeftSection>
        <motion.h1
          key={cards[selectedCardIndex]?.id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {titles[selectedCardIndex]} {/* Display the current title */}
        </motion.h1>

        <motion.p
          key={cards[selectedCardIndex]?.id + "-desc"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {cards[selectedCardIndex]?.description}
        </motion.p>
         {/* Add the button below the text */}
         <ActionButton  onClick={() => alert(`More about ${cards[selectedCardIndex]?.title}`)}>
          View Products
        </ActionButton>
      </LeftSection>

      {/* Right: Card Slider */}
      <RightSection>
        <CardContainer>
          {cards.map((card, index) => (
            <Card
              key={card.id}
              onClick={() => handleCardClick(index)} // Update card selection on click
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              isActive={index === selectedCardIndex} // Pass active state
            >
              <CardImage src={card.image} alt={card.title} />
              <CardTitle>{card.title}</CardTitle>
              {/* Conditionally render the button inside the card */}
              {buttonVisible === index && (
                <ButtonContainer>
                  <Button onClick={() => alert(`Viewing products for ${card.title}`)}><FaEye /></Button>
                </ButtonContainer>
              )}
            </Card>
          ))}
        </CardContainer>

        {/* Pagination Dots */}
        <PaginationContainer>
          {cards.map((_, index) => (
            <Dot
              key={index}
              active={index === selectedCardIndex}
              onClick={() => handleDotClick(index)} // Update card selection on dot click
            />
          ))}
        </PaginationContainer>

        {/* Navigation Arrows */}
        <ArrowContainer>
  <Arrow isLeft isActive={selectedCardIndex === 0} onClick={handlePrevious}>
    <FaArrowLeft />
  </Arrow>
  <Arrow isActive={selectedCardIndex === cards.length - 1} onClick={handleNext}>
    <FaArrowRight />
  </Arrow>
</ArrowContainer>

      </RightSection>
    </Container>
  );
};

export default Slider;

