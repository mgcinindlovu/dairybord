import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { FaPaperPlane } from "react-icons/fa";
import Footer from "../components/Footer";
import image3 from "../assets/Rectangle 4-1.jpg";
import image1 from "../assets/Rectangle 4.jpg";
import image2 from "../assets/Rectangle 4-1.jpg";
import image5 from "../assets/Rectangle 4-2.jpg";
import image6 from "../assets/Rectangle 4-1.jpg";
import image7 from "../assets/Rectangle 4 (1).jpg";
import image8 from "../assets/Rectangle 4.jpg";

const BlogContainer = styled.div`
  display: grid;
  font-family: 'Marhey', sans-serif;
`;

const Section = styled.section`
  display: flex;
  padding: 40px 50px;
  background-color: #f8f8f8;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const LeftDiv = styled.div`
  flex: 1;
  padding: 20px;

  h3 {
    font-size: 27px;
    font-weight: 700;
    margin-top: 130px;
    color: #000;
    
    @media (max-width: 768px) {
      font-size: 22px;
      margin-top: 20px;
    }
  }

  p {
    font-size: 16px;
    line-height: 27.84px;
    font-weight: 400;
    color: #000;

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 22px;
    }
  }

  a {
    color: #283e7e;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const RightDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const SubTitle = styled.h3`
  margin-top: 40px;
  text-align: center;
  color: #283e7e;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

const CardContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: center;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const CardTitle = styled.h4`
  font-size: 19px;
  font-weight: 400;
  margin: 10px 0;
`;

const CardDescription = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #666;
`;

const NewsletterSection = styled.div`
  background-color: #283e7e;
  color: #fff;
  text-align: center;
  padding: 100px 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const NewsletterTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const NewsletterDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 300px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 10px 0 10px 10px;
  font-size: 16px;
  border-radius: 30px;
  border: none;
  outline: none;
`;

const SubscribeButton = styled.button`
  position: absolute;
  margin-left: 105px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #283e7e;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #1f2c5a;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    position: relative;
    transform: none;
    margin-top: 10px;
  }
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
  max-width: 500px;
  width: 100%;
  max-height: 80vh; /* Set a maximum height */
  overflow-y: auto; /* Enable vertical scrolling */
  text-align: center;
`;

const ModalImage = styled.img`
  width: 100%;
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
  margin-top: 20px;

  &:hover {
    background: #1f2c5a;
  }
`;

const Blog: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(image3);
  const [selectedTitle, setSelectedTitle] = useState(
    "How Dairibord sustained the Ncube Family During Tougher times"
  );
  const [selectedDescription, setSelectedDescription] = useState(
    "Learn how the Ncube family was sustained by Dairibord in this heartwarming story of power and resilience."
  );
  const [selectedFullStory, setSelectedFullStory] = useState(
    "This is the full story of how the Ncube family was sustained by Dairibord during tougher times. The Ncube family faced many challenges, but with the support of Dairibord, they were able to overcome them. The story highlights the power of resilience and the importance of community support. The Ncube family is now thriving and continues to be grateful for the assistance they received from Dairibord."
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (newImage: string, newTitle: string, newDescription: string, newFullStory: string) => {
    setSelectedImage(newImage);
    setSelectedTitle(newTitle);
    setSelectedDescription(newDescription);
    setSelectedFullStory(newFullStory);
  };

  const handleReadMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BlogContainer id="blog">
      <Header />

      {/* Section with Left and Right Divs */}
      <Section>
        <LeftDiv>
          <h3>{selectedTitle}</h3>
          <p>{selectedDescription}</p>
          <a onClick={handleReadMoreClick}>Read more</a>
        </LeftDiv>
        <RightDiv>
          <SectionImage src={selectedImage} alt="Blog Image" />
        </RightDiv>
      </Section>

      <SubTitle>Latest Articles</SubTitle>
      <CardsContainer>
        <CardContainer onClick={() => handleCardClick(image1, "Fun & Fresh", "Discover the fun and fresh taste of our dairy products.", "This is the full story about Fun & Fresh. Discover the fun and fresh taste of our dairy products. Our products are made from the highest quality ingredients and are perfect for any occasion. Enjoy the delicious taste and the health benefits of our dairy products.")}>
          <CardImage src={image1} alt="Card 1" />
          <CardTitle>Dairy Kitchen Delights</CardTitle>
          <CardDescription>5 recipes you have to try based on our dairy products!</CardDescription>
        </CardContainer>
        <CardContainer onClick={() => handleCardClick(image2, "Lyons Peanut Butter", "A rich, creamy delight loved by many families.", "This is the full story about Lyons Peanut Butter. A rich, creamy delight loved by many families. Our peanut butter is made from the highest quality peanuts and is perfect for spreading on bread, adding to smoothies, or using in recipes. Enjoy the delicious taste and the health benefits of our peanut butter.")}>
          <CardImage src={image2} alt="Card 2" />
          <CardTitle>Dairy brings a family together</CardTitle>
          <CardDescription>A heartwarming story of togetherness!</CardDescription>
        </CardContainer>
      
      <CardContainer onClick={() => handleCardClick(image5, "Quick Brew Coffee", "The perfect blend for a smooth and refreshing start.", "This is the full story about Quick Brew Coffee. The perfect blend for a smooth and refreshing start. Our coffee is made from the highest quality beans and is perfect for any time of day. Enjoy the delicious taste and the health benefits of our coffee.")}>
          <CardImage src={image5} alt="Card 3" />
          <CardTitle>From cow to kitchen</CardTitle>
          <CardDescription>5 surprising uses for fresh milk for those who love milk!</CardDescription>
        </CardContainer>
        <CardContainer onClick={() => handleCardClick(image6, "PKUFO Yogurt", "A creamy and nutritious yogurt for your daily boost.", "This is the full story about PKUFO Yogurt. A creamy and nutritious yogurt for your daily boost. Our yogurt is made from the highest quality ingredients and is perfect for any time of day. Enjoy the delicious taste and the health benefits of our yogurt.")}>
          <CardImage src={image6} alt="Card 4" />
          <CardTitle>Growing Strong</CardTitle>
          <CardDescription>How a glass  of milks helps your child thrive!</CardDescription>
        </CardContainer>
        <CardContainer onClick={() => handleCardClick(image7, "Yummy Ice Cream", "Enjoy the smoothest and most delicious ice cream.", "This is the full story about Yummy Ice Cream. Enjoy the smoothest and most delicious ice cream. Our ice cream is made from the highest quality ingredients and is perfect for any occasion. Enjoy the delicious taste and the health benefits of our ice cream.")}>
          <CardImage src={image7} alt="Card 5" />
          <CardTitle>Beyond Yoghurt</CardTitle>
          <CardDescription>Creative ways to mix, match and enjoy!</CardDescription>
        </CardContainer>
        <CardContainer onClick={() => handleCardClick(image8, "Steri Milk", "A fresh, sterilized milk perfect for your family.", "This is the full story about Steri Milk. A fresh, sterilized milk perfect for your family. Our milk is made from the highest quality ingredients and is perfect for any time of day. Enjoy the delicious taste and the health benefits of our milk.")}>
          <CardImage src={image8} alt="Card 6" />
          <CardTitle>Dairyboard Kitchen</CardTitle>
          <CardDescription>Plans to extend the dairyboard kitchen to different places in Zimbabwe made available</CardDescription>
        </CardContainer>
      </CardsContainer>

      {/* Newsletter Section */}
      <NewsletterSection>
        <NewsletterTitle>Subscribe to Our Newsletter</NewsletterTitle>
        <NewsletterDescription>Get the latest dairy recipes, health tips, and special offers straight to your inbox!</NewsletterDescription>
        <FormContainer>
          <InputContainer>
            <EmailInput type="email" placeholder="Enter your email" />
            <SubscribeButton><FaPaperPlane /></SubscribeButton>
          </InputContainer>
        </FormContainer>
      </NewsletterSection>

      <Footer />

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalImage src={selectedImage} alt="Blog Image" />
            <h3>{selectedTitle}</h3>
            <p>{selectedFullStory}</p>
            <CloseButton onClick={handleCloseModal}>Close</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </BlogContainer>
  );
};

export default Blog;