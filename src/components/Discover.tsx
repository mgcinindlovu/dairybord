import React from "react";
import styled from "styled-components";
import Image from "../assets/image.jpg"; 

const DiscoverSection = styled.section`
  height: 100vh;
  background: url(${Image}) ;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: left;
  justify-content: flex-start;
  text-align: left;
  color: white;
  font-family: "Marhey", sans-serif;
   padding: 50px 0 0 100px;
 margin-top: 5%;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;
`;

const Title = styled.h1`
  font-size:64px;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const DiscoverButton = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background: #283e7e;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-family: "Marhey", sans-serif;

  &:hover {
    background: white;
    color: #283e7e;
    border: 1px solid #283e7e;
  }
`;

const Discover = () => {
  return (
    <DiscoverSection>
      <Content>
        <Title>Dairy that Delivers Deliciousness!</Title>
        <Text>We are a dairy company focusd on delivering quality value to our customer.</Text>
        <DiscoverButton>Learn More</DiscoverButton>
      </Content>
    </DiscoverSection>
  );
};

export default Discover;
