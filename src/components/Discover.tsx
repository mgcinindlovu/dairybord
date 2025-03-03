import React from "react";
import styled from "styled-components";
import Image from "../assets/image.jpg"; 

const DiscoverSection = styled.section`
  height: 100vh;
  background: url(${Image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  color: white;
  font-family: "Marhey", sans-serif;
  padding: 50px 0 0 100px;
  margin-top: 5%;

  @media (max-width: 768px) {
    padding: 30px 20px;
    height: auto; /* Allow height to adjust */
    margin-top: 40px; /* Remove margin on smaller screens */
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 1024px) {
    
    height: 50vh; /* Allow height to adjust */
    
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 90%; /* Increase max-width on smaller screens */
  }
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 36px; /* Adjust font size on smaller screens */
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size on smaller screens */
    margin-bottom: 1rem; /* Adjust margin on smaller screens */
  }
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

  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem; /* Adjust button padding on smaller screens */
    font-size: 0.9rem; /* Adjust font size on smaller screens */
  }
`;

const Discover = () => {
  return (
    <DiscoverSection>
      <Content>
        <Title>Dairy that Delivers Deliciousness!</Title>
        <Text>We are a dairy company focused on delivering quality value to our customers.</Text>
        <DiscoverButton>Learn More</DiscoverButton>
      </Content>
    </DiscoverSection>
  );
};

export default Discover;
