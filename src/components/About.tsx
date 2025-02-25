import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye } from "react-icons/fa";
import image1 from "../assets/vegan-food-nutrition-concept-cheerful-dark-skinned-woman-with-curly-hair-holds-bottle-fresh-almond-milk.jpg";
import image3 from "../assets/young-woman-with-cocktail-yellow-background.jpg";
import image5 from "../assets/photo-pleased-afro-american-woman-stands-with-closed-eyes-holds-two-ice-creams.jpg";
import image6 from "../assets/pleased-dark-skinned-woman-holds-jars-organic-natural-yoghurt-ingredient-preparing-breakfast-concentrated-hat-toothy-smile-wears-green-t-shirt-people-healthy-nutrition-concept.jpg";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column; // Stack sections vertically
  height: 120vh;
  padding: 50px;
  position: relative;
  overflow: hidden;
  color: black;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const TopSection = styled.div`
  display: flex;
  flex: 1; // Allow top section to grow
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    max-width: 400px;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 400px;
  font-family: 'Marhey';

  h1 {
    font-size: 46px;
    color: #fff;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    color: #ddd;
    margin-bottom: 20px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  z-index: 2;
  font-family: 'Marhey';
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
  border: ${({ isActive }) => (isActive ? "2px solid #283E7E" : "none")};
  transform: ${({ isActive }) => (isActive ? "scale(1.05)" : "scale(1)")};
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

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
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

const ActionButton = styled.button`
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
  "Milk but better",
  "Refreshing Drinks Await!",
  "Creamy Yogurt Delights!",
  "Rich Mayonnaise for Every Dish!",
];

const About = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [buttonVisible, setButtonVisible] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index);
    setButtonVisible(index);
  };

  const handleDotClick = (index: number) => {
    setSelectedCardIndex(index);
    setButtonVisible(index);
  };

  return (
    <Container>
      {/* Header Section */}
      <HeaderSection>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: '#000000' }}
        >
          Welcome to Our Dairy Products!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: '#000000' }}
        >
          Discover the richness and health benefits of our carefully curated dairy products. 
          From refreshing almond milk to creamy yogurt, we have something for everyone!
        </motion.p>
      </HeaderSection>

      {/* Top Section: Image and Text */}
      <TopSection>
        <ImageContainer>
          <AnimatePresence>
            {selectedCardIndex >= 0 && (
              <motion.img
                key={cards[selectedCardIndex]?.id}
                src={cards[selectedCardIndex].image}
                alt={cards[selectedCardIndex].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </AnimatePresence>
        </ImageContainer>

        <LeftSection>
          <motion.h1
            key={cards[selectedCardIndex]?.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {titles[selectedCardIndex]}
          </motion.h1>

          <motion.p
            key={cards[selectedCardIndex]?.id + "-desc"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {cards[selectedCardIndex]?.description}
          </motion.p>
          <ActionButton onClick={() => alert(`More about ${cards[selectedCardIndex]?.title}`)}>
            View Products
          </ActionButton>
        </LeftSection>
      </TopSection>

      {/* Bottom Section: Card Slider */}
      <CardContainer>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            onClick={() => handleCardClick(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            isActive={index === selectedCardIndex}
          >
            <CardImage src={card.image} alt={card.title} />
            <CardTitle>{card.title}</CardTitle>
            {buttonVisible === index && (
              <ButtonContainer>
                <Button onClick={() => alert(`Viewing products for ${card.title}`)}>
                  <FaEye />
                </Button>
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
            onClick={() => handleDotClick(index)}
          />
        ))}
      </PaginationContainer>
    </Container>
  );
};

export default About;
