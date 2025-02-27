import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { FaPaperPlane  } from "react-icons/fa";
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
  font-family: 'Marhey';
`;

const Section = styled.section`
  display: flex;
  padding: 40px 50px;
  background-color: #f8f8f8;
`;

const LeftDiv = styled.div`
  flex: 1;
  padding: 20px;

  h3 {
    font-size: 27px;
    font-weight: 700;
    margin-top: 130px;
    color: #000000;
  }
  p {
    font-size: 16px;
    line-height: 27.84px;
    font-weight: 400;
    color: #000000;
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
  padding: 20px 0;
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
  font-weight:400;
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

`;

const NewsletterTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const NewsletterDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 40px;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content:center;
`;

const InputContainer = styled.div`
  position: relative;
  width: 300px;
`;

const EmailInput = styled.input`
  width: 100%;
 padding: 10px 0 10px 10px ;
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
  color: #ffffff;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #283e7e;
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

  const handleCardClick = (newImage: string, newTitle: string, newDescription: string) => {
    setSelectedImage(newImage);
    setSelectedTitle(newTitle);
    setSelectedDescription(newDescription);
  };

  return (
    <BlogContainer id="blog">
      <Header />

      {/* Section with Left and Right Divs */}
      <Section>
        <LeftDiv>
          <h3>{selectedTitle}</h3>
          <p>{selectedDescription}</p>
          <a href="#read-more">Read more</a>
        </LeftDiv>
        <RightDiv>
          <SectionImage src={selectedImage} alt="Blog Image" />
        </RightDiv>
      </Section>

      <SubTitle>Latest Articles</SubTitle>
      <CardsContainer>
        <CardContainer onClick={() => handleCardClick(image1, "Fun & Fresh", "Discover the fun and fresh taste of our dairy products.")}>
          <CardImage src={image1} alt="Card 1" />
          <CardTitle>Dairy Kitchen Delights</CardTitle>
          <CardDescription>5 recipes you have to try based on our dairy products!</CardDescription>
        </CardContainer>
        <CardContainer onClick={() => handleCardClick(image2, "Lyons Peanut Butter", "A rich, creamy delight loved by many families.")}>
          <CardImage src={image2} alt="Card 2" />
          <CardTitle>Dairy brings a family together</CardTitle>
          <CardDescription>A heartwarming story of togetherness!</CardDescription>
        </CardContainer>
        <CardContainer onClick={() => handleCardClick(image5, "Quick Brew Coffee", "The perfect blend for a smooth and refreshing start.")}>
          <CardImage src={image5} alt="Card 3" />
          <CardTitle>From cow to kitchen</CardTitle>
          <CardDescription>5 surprising uses for fresh milk for those who love milk!</CardDescription>
        </CardContainer>
        <CardContainer onClick={() => handleCardClick(image6, "PKUFO Yogurt", "A creamy and nutritious yogurt for your daily boost.")}>
          <CardImage src={image6} alt="Card 4" />
          <CardTitle>Growing Strong</CardTitle>
          <CardDescription>How a glass  of milks helps your child thrive!</CardDescription>
        </CardContainer>
        <CardContainer onClick={() => handleCardClick(image7, "Yummy Ice Cream", "Enjoy the smoothest and most delicious ice cream.")}>
          <CardImage src={image7} alt="Card 5" />
          <CardTitle>Beyond Yughurt</CardTitle>
          <CardDescription>Creative ways to mix,match and enjoy!</CardDescription>
        </CardContainer>
        <CardContainer onClick={() => handleCardClick(image8, "Steri Milk", "A fresh, sterilized milk perfect for your family.")}>
          <CardImage src={image8} alt="Card 6" />
          <CardTitle>Dairyboard Kitchen</CardTitle>
          <CardDescription>Plans to extend the dairyboard kitchen to different places in Zimbabwe made available</CardDescription>
        </CardContainer>
      </CardsContainer>

     
      {/* Newsletter Section */}
      <NewsletterSection>
        <NewsletterTitle>Subscribe to Our Newsletter</NewsletterTitle>
        <NewsletterDescription>
          Get the latest dairy recipes, health tips, and special offers straight to your inbox!
        </NewsletterDescription>
        <FormContainer>
          <InputContainer>
            <EmailInput type="email" placeholder="Enter your email" />
            <SubscribeButton> <FaPaperPlane  /></SubscribeButton>
          </InputContainer>
        </FormContainer>
      </NewsletterSection>
      <Footer />
    </BlogContainer>
  );
};

export default Blog;
