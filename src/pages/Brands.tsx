import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import image7 from "../assets/Full-Cream-Milk-1L-1.png";
import image1 from "../assets/Traditional-1.png";
import image2 from "../assets/Tomato-Sauce-2.png";
import image5 from "../assets/Orange-2L-2.png";
import image6 from "../assets/Salad-Cream-780g-2.png";
import image4 from "../assets/Lacto.png";
import image3 from "../assets/vegan-food-nutrition-concept-cheerful-dark-skinned-woman-with-curly-hair-holds-bottle-fresh-almond-milk.jpg";
import image10 from "../assets/fun n fresh logo 1.png";
import image20 from "../assets/lyons-peanut-butter-logo 2.png";
import image50 from "../assets/lyons-quick-brew logo 1.png";
import image60 from "../assets/pkufo logo 1.png";
import image70 from "../assets/yummy.png";
import image80 from "../assets/steri.png";
import image90 from "../assets/steri1.png";
import image100 from "../assets/Full-Cream-Milk-1L-1.png";
import image101 from "../assets/Full-Cream-Milk-1L-1.png";
import image102 from "../assets/Full-Cream-Milk-1L-1.png";
import image103 from "../assets/Full-Cream-Milk-1L-1.png";
import image104 from "../assets/Full-Cream-Milk-1L-1.png";
import image105 from "../assets/Full-Cream-Milk-1L-1.png";
import image106 from "../assets/Full-Cream-Milk-1L-1.png";
import image107 from "../assets/Full-Cream-Milk-1L-1.png";
import image108 from "../assets/Full-Cream-Milk-1L-1.png";
import image109 from "../assets/Full-Cream-Milk-1L-1.png";

const BrandsContainer = styled.div`
  display: grid;
  text-align: center;
  font-family: 'Marhey';
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 100;
  padding: 10% 60% 15% 0 ;
  color: #ffffff;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url(${image3}) center center / cover no-repeat;
  font-family: "Marhey";

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 15% 5% 0;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  justify-content: center;
  padding: 60px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 30px;
  }
`;

const CardContainer = styled.div`
  background: #6565d6;
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  &:hover .hover-text {
    transform: translateY(0);
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 100%;
  margin-bottom: 10px;
`;

const HoverText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 10px;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
`;

const DivContainer = styled.div`
  margin-bottom: 40px;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
`;

const SubTitle = styled.h3`
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 20px;
  font-family: 'Marhey';

  @media (max-width: 600px) {
    font-size: 36px;
  }
`;

const CardContainerDivOne = styled.div`
  width: 150px;
  cursor: pointer;
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
  width: 100%;
  max-height: 80vh; /* Set a maximum height */
  overflow-y: auto; /* Enable vertical scrolling */
  text-align: center;
  position: relative; /* Position relative for absolute children */
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
  position: absolute; /* Position absolute for top left placement */
  top: 10px;
  left: 10px;

  &:hover {
    background: #1f2c5a;
  }
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ProductTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
`;

const moveUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const spreadOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const AnimatedCard = styled.div`
  animation: ${moveUp} 1s ease-out forwards, ${spreadOut} 1s 1s ease-out forwards;
`;

const Brands: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ title: string; image: string } | null>(null);

  const products = [
    { id: 1, title: "Fun n Fresh", image: image10 },
    { id: 2, title: "Lyons Peanut Butter", image: image20 },
    { id: 3, title: "Lyons Quick Brew", image: image50 },
    { id: 4, title: "PKUFO", image: image60 },
    { id: 5, title: "Yummy", image: image70 },
    { id: 6, title: "Steri", image: image80 },
    { id: 7, title: "Steri1", image: image90 },
  ];

  const modalProducts = [
    { id: 1, title: "Product 1", image: image100 },
    { id: 2, title: "Product 2", image: image101 },
    { id: 3, title: "Product 3", image: image102 },
    { id: 4, title: "Product 4", image: image103 },
    { id: 5, title: "Product 5", image: image104 },
    { id: 6, title: "Product 6", image: image105 },
    { id: 7, title: "Product 7", image: image106 },
    { id: 8, title: "Product 8", image: image107 },
    { id: 9, title: "Product 9", image: image108 },
    { id: 10, title: "Product 10", image: image109 },
  ];

  const bestSellers = [
    { image: image7, text: "Best Seller 1" },
    { image: image1, text: "Best Seller 2" },
    { image: image2, text: "Best Seller 3" },
    { image: image5, text: "Best Seller 4" },
    { image: image6, text: "Best Seller 5" },
    { image: image4, text: "Best Seller 6" },
  ];

  const handleCardClick = (product: { title: string; image: string }) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <BrandsContainer id="brands">
      <Header />
      <Title>Our brands</Title>
      <div>
        <h1>Our Best Sellers</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <CardsContainer>
        {bestSellers.map((item, index) => (
          <CardContainer key={index}>
            <CardImage src={item.image} alt={`Card ${index + 1}`} />
            <HoverText className="hover-text">{item.text}</HoverText>
          </CardContainer>
        ))}
      </CardsContainer>

      <DivContainer>
        <SubTitle>Our Products</SubTitle>
        <div>
          {products.map((product) => (
            <CardContainerDivOne key={product.id} onClick={() => handleCardClick(product)}>
              <CardImage src={product.image} alt={product.title} />
            </CardContainerDivOne>
          ))}
        </div>
      </DivContainer>
      <Contact />
      <Footer />

      {isModalOpen && selectedProduct && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>Close</CloseButton>
            <h3>{selectedProduct.title}</h3>
            <ProductList>
              {modalProducts.map((product, index) => (
                <ProductItem key={product.id}>
                  <AnimatedCard style={{ animationDelay: `${index * 0.1}s` }}>
                    <ModalImage src={product.image} alt={product.title} />
                    <ProductTitle>{product.title}</ProductTitle>
                  </AnimatedCard>
                </ProductItem>
              ))}
            </ProductList>
          </ModalContent>
        </ModalOverlay>
      )}
    </BrandsContainer>
  );
};

export default Brands;