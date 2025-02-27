import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/milk.png";
import image3 from "../assets/500ml.png";
import image5 from "../assets/icecream.png";
import image6 from "../assets/Tomato-Sauce-2.png";
import image7 from "../assets/Lacto.png";
import image9 from "../assets/Orange-2L-2.png";
import image10 from "../assets/Peanut-Butter-2.png";
import image11 from "../assets/Salad-Cream-780g-2.png";
import image12 from "../assets/Quick-Brew-Tea-Bags-3.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 50px;
  
  color: black;
  gap: 60px;
  font-family: 'Marhey';
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ContentSection = styled.div`
  display: flex;
  gap: 60px;
  flex-direction: row;
  flex: 1;
`;

const LeftSection = styled.div<{ backgroundColor: string }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 15px;
  padding: 20px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
`;

const ImageDisplay = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 15px;
`;

const Title = styled(motion.h1)`
  font-size: 48px;
  font-weight: 400;
  color: #000000;
`;

const Description = styled(motion.p)`
  font-size: 18px;
  color: #000000;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

interface PaginationItemProps {
  active: boolean;
}

const PaginationItem = styled(motion.img)<PaginationItemProps>`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  cursor: pointer;
  object-fit: cover;
  border: ${({ active }) => (active ? "2px solid #283e7e" : "none")};
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ActionButton = styled.button`
  margin-top: 20px;
  font-family: 'Marhey';
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #283e7e;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: white;
    color: #283e7e;
  }
`;

const NavigationButton = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #283e7e;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1e2c5d;
  }
`;

const cards = [
  {
    id: 1,
    title: "Milk",
    description: "Fresh and creamy, our dairy milk is sourced from healthy cows and is rich in essential nutrients like calcium, vitamin D, and protein. Perfect for drinking, cooking, or adding to your favorite recipes.",
    image: image1,
    backgroundColor: "#fdd78437", // Light yellow
  },
  {
    id: 2,
    title: "Cream",
    description: "Luxuriously thick and smooth, our cream adds richness to both sweet and savory dishes. Ideal for whipping, cooking, or drizzling over desserts, it's the perfect indulgence for enhancing your culinary creations.",
    image: image3,
    backgroundColor: "#fdd78437", // Light blue
  },
  {
    id: 3,
    title: "Icecream",
    description: "Pure and refreshing, our water is sourced from natural springs, ensuring a crisp taste and high quality. Stay hydrated with this essential beverage, perfect for any occasion.",
    image: image5,
    backgroundColor: "#fdd78437", // Light pink
  },
  {
    id: 4,
    title: "Tomato Sauce",
    description: "Made from ripe, juicy tomatoes, our tomato sauce is packed with flavor and perfect for pasta, pizzas, and various dishes. Enjoy the rich taste of sun-ripened tomatoes combined with herbs and spices.",
    image: image6,
    backgroundColor: "#fdd78437", // Light gray
  },
  {
    id: 5,
    title: "Lacto",
    description: "A delicious and nutritious probiotic beverage, our lacto drink is made from fermented milk, providing a creamy texture and a tangy flavor. It's great for digestion and can be enjoyed on its own or used in smoothies.",
    image: image7,
    backgroundColor: "#fdd78437", // Light gray
  },
  {
    id: 6,
    title: "Drinks",
    description: "A delicious and nutritious probiotic beverage, our lacto drink is made from fermented milk, providing a creamy texture and a tangy flavor. It's great for digestion and can be enjoyed on its own or used in smoothies.",
    image: image9,
    backgroundColor: "#fdd78437", // Light gray
  },
  {
    id: 7,
    title: "Peanut Butter",
    description: "Creamy or crunchy, our peanut butter is made from high-quality peanuts, offering a rich, nutty flavor and a good source of protein and healthy fats. Perfect for spreading, baking, or adding to smoothies.",
    image: image10,
    backgroundColor: "##fdd78437", // Light gray
  },
  {
    id: 8,
    title: "Mayonnaise",
    description: "Rich and flavorful mayonnaise for your dishes.",
    image: image11,
    backgroundColor: "#fdd78437", // Light gray
  },
  {
    id: 9,
    title: "Teabags",
    description: "Our teabags are filled with carefully selected tea leaves, offering a delightful brew full of flavor and aroma. Enjoy a calming cup of tea any time of day, whether you prefer herbal, black, green, or flavored varieties.",
    image: image12,
    backgroundColor: "#fdd78437", // Light gray
  }, // Keeping your existing array unchanged

];

const About = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const handlePrev = () => {
    setSelectedCardIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cards.length - 1));
  };

  const handleNext = () => {
    setSelectedCardIndex((prevIndex) => (prevIndex < cards.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <Container>
      <HeaderSection>
        <Title>About Our Dairy Products</Title>
        <Description>Discover our range of healthy and delicious dairy products.</Description>
      </HeaderSection>

      <ContentSection>
        <LeftSection backgroundColor={cards[selectedCardIndex].backgroundColor}>
          <AnimatePresence>
            <ImageDisplay
              key={cards[selectedCardIndex]?.id}
              src={cards[selectedCardIndex]?.image}
              alt={cards[selectedCardIndex]?.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
       
        </LeftSection>

        <RightSection>
          <Title>{cards[selectedCardIndex]?.title}</Title>
          <Description>{cards[selectedCardIndex]?.description}</Description>
          <ActionButton  onClick={() => alert(`More about ${cards[selectedCardIndex]?.title}`)}>
            View Products
          </ActionButton>
        </RightSection>
      </ContentSection>
         <PaginationContainer>
            <NavigationButton onClick={handlePrev}>←</NavigationButton>
            {cards.map((card, index) => (
              <PaginationItem
                key={card.id}
                src={card.image}
                alt={card.title}
                active={index === selectedCardIndex}
                onClick={() => setSelectedCardIndex(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
            <NavigationButton onClick={handleNext}>→</NavigationButton>
          </PaginationContainer>
    </Container>
  );
};

export default About;
