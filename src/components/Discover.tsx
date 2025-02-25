import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

interface CardProps {
  bgColor: string;
}

const Card = styled.div<CardProps>`
   width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 0.5rem;
  font-weight:00;
  border-radius: 10px;
  background: ${(props) => props.bgColor};
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;


  &:hover {
    transform: scale(1.05);
  }

  &:hover div {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
 gap:100px;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.3s, transform 0.3s;
`;

const Button = styled.button`
   background: transparent;
  color: black;
  border: 1px solid black ;
  border-radius: 50%;
  padding: 5px ;

  font-size: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #ddd;
  }
`;

const Discover = () => {
  return (
    <Container>
      <Title>Discover Our Products</Title>
      <Text>Explore a range of high-quality dairy products made with love and care.</Text>
      <CardContainer>
        <Card bgColor="#A0DBF4">
          <p>Fresh Milk</p>
          <Overlay>
          <div><p>Rich in nutrients for a healthy life</p></div>
            <div><Button> <FaArrowRight /></Button></div>
          </Overlay>
        </Card>
        <Card bgColor="#A0F4AF">
         <p>Yoghurt</p> 
          <Overlay>
          <div><p>Delicious and creamy, perfect for all</p></div>
          <div><Button><FaArrowRight /></Button></div>
          </Overlay>
        </Card>
        <Card bgColor="#EDA0F4">
         <p>Ice Cream</p> 
          <Overlay>
           <div> <p>Cool and refreshing, a sweet delight</p></div>
            <div><Button> <FaArrowRight /></Button></div>
          </Overlay>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Discover;
