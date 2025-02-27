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

  div{
    text-align: center;
    font-family: 'Marhey';
  }
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
  }
`;

const CardContainer = styled.div`
  background: #6565d6; // Change to blue when active
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s, background-color 0.3s; // Add transition for background
  cursor: pointer;

  &:hover {

    transform: scale(1.05);
  }

`;
const CardContainer1 = styled.div`
  background: #7c2d08; // Change to blue when active
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s, background-color 0.3s; // Add transition for background
  cursor: pointer;

  &:hover {
   
    transform: scale(1.05);
  }


 
`;
const CardContainer2 = styled.div`
  background: #bd6666; // Change to blue when active
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s, background-color 0.3s; // Add transition for background
  cursor: pointer;

  &:hover {
   
    transform: scale(1.05);
  }


 
`;
const CardContainer3 = styled.div`
  background: #ffd900; // Change to blue when active
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s, background-color 0.3s; // Add transition for background
  cursor: pointer;

  &:hover {
    // Darker blue on hover
    transform: scale(1.05);
  }


 
`;
const CardContainer4 = styled.div`
  background: #fc9948; // Change to blue when active
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s, background-color 0.3s; // Add transition for background
  cursor: pointer;

  &:hover {
   
    transform: scale(1.05);
  }


 
`;
const CardContainer5 = styled.div`
  background: #ff9900; // Change to blue when active
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s, background-color 0.3s; // Add transition for background
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

  margin-bottom: 40px; // Space between the two divs

  div{
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`;

const SubTitle = styled.h3`
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 20px;

  font-family:'Marhey';
`;
const CardContainerDivOne = styled.div`
  width: 150px;
  cursor: pointer;
`;

const Brands: React.FC = () => {
  return (
    < BrandsContainer id="brands">
      <Header />
      <Title>Our brands</Title>
     <div><h1>Our Best Sellers</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odio laborum officiis accusamus ut laboriosam aperiam similique reiciendis modi quia consequuntur.</p></div> 
      <CardsContainer>
      
        <CardContainer >
          <CardImage src={image7} alt="Card 1" />
        
        </CardContainer>
        <CardContainer1>
          <CardImage src={image1} alt="Card 2" />
         
        </CardContainer1>
        <CardContainer2 >
          <CardImage src={image2} alt="Card 3" />
        
        </CardContainer2>

        <CardContainer3>
          <CardImage src={image5} alt="Card 4" />
         
        </CardContainer3>
        <CardContainer4 >
          <CardImage src={image6} alt="Card 5" />
          
        </CardContainer4>
        <CardContainer5 >
          <CardImage src={image4} alt="Card 6" />
         
        </CardContainer5>
      </CardsContainer>

      <DivContainer>
          <SubTitle>Our Products</SubTitle>
         <div>
         <CardContainerDivOne>
              <CardImage src={image10} alt="Card 1" />
            
            </CardContainerDivOne>
            <CardContainerDivOne>
              <CardImage src={image20} alt="Card 2" />
            
            </CardContainerDivOne>
            <CardContainerDivOne>
              <CardImage src={image50} alt="Card 3" />
              
            </CardContainerDivOne>
            <CardContainerDivOne>
              <CardImage src={image60} alt="Card 4" />
             
            </CardContainerDivOne>
            <CardContainerDivOne>
              <CardImage src={image70} alt="Card 5" />
             
            </CardContainerDivOne>
            <CardContainerDivOne>
              <CardImage src={image80} alt="Card 6" />
             
            </CardContainerDivOne>
            <CardContainerDivOne>
              <CardImage src={image90} alt="Card 7" />
             
            </CardContainerDivOne>
         </div>
            
        </DivContainer>
      <Contact />
      <Footer />
    </BrandsContainer>
  );
};

export default Brands;
