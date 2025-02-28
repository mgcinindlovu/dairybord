import React from "react";
import styled from "styled-components";
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

const BrandsContainer = styled.div`
  display: grid;
  text-align: center;
  font-family: 'Marhey';
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 100;
  padding: 20% 5% 0;
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
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 100%;
  margin-bottom: 10px;
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

const Brands: React.FC = () => {
  return (
    <BrandsContainer id="brands">
      <Header />
      <Title>Our brands</Title>
      <div>
        <h1>Our Best Sellers</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <CardsContainer>
        {[image7, image1, image2, image5, image6, image4].map((img, index) => (
          <CardContainer key={index}>
            <CardImage src={img} alt={`Card ${index + 1}`} />
          </CardContainer>
        ))}
      </CardsContainer>

      <DivContainer>
        <SubTitle>Our Products</SubTitle>
        <div>
          {[image10, image20, image50, image60, image70, image80, image90].map((img, index) => (
            <CardContainerDivOne key={index}>
              <CardImage src={img} alt={`Card ${index + 1}`} />
            </CardContainerDivOne>
          ))}
        </div>
      </DivContainer>
      <Contact />
      <Footer />
    </BrandsContainer>
  );
};

export default Brands;
