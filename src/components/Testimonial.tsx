import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/swiper-bundle.css';
import styled from 'styled-components';
import image from '../assets/pic1.jpg';
import image2 from '../assets/pic2.jpg';
import image3 from '../assets/pic3.jpg';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


// Sample data for testimonial cards
const testimonials = [
  {
    id: 1,
    text: 'I survived my exams thanks to Chimombe. Midnight study sessions were a breeze!',
    author: 'John Doe',
    image: image2,
  },
  {
    id: 2,
    text: 'No weekend is complete without my Fun ‘n Fresh cocktail mix. 10/10, no notes!',
    author: 'Jane Smith',
    image: image,
  },
  {
    id: 3,
    text: 'Dairibord’s NutriYoghurt is my go-to snack before gym! Tastes amazing & keeps me full!',
    author: 'Aleck Johnson',
    image: image3,
  },
  {
    id: 3,
    text: 'Dairibord’s NutriYoghurt is my go-to snack before gym! Tastes amazing & keeps me full!',
    author: 'Aleck Johnson',
    image: image3,
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  font-family: "Marhey";

  h1{
    font-size: 48px;
    font-weight: 400;
  }
`;

const TestimonialCard = styled.div<{ isActive: boolean }>`
 width: 300px;
  cursor: pointer;
  background: ${({ isActive }) => (isActive ? '#283E7E' : '#fff')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
  border-radius: 10px;
  padding: 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s, filter 0.3s, background 0.3s, color 0.3s;
  border: ${({ isActive }) => (isActive ? '2px solid #283E7E' : '2px  solid #000000')};
  box-shadow: ${({ isActive }) =>
    isActive ? '0 4px 15px rgba(0, 123, 255, 0.5)' : '0 2px 10px rgba(0, 0, 0, 0.1)'};
  transform: ${({ isActive }) => (isActive ? 'scale(1.1)' : 'scale(1)')};
  filter: ${({ isActive }) => (isActive ? 'none' : 'blur(2px) opacity(0.5)')};

  

  div {
    display: flex;
    gap: 10px;
   
  }
  div p{
    font-size: 18px;
    color: #ffffff;
    margin-left: 130px;
  }
`;

const TestimonialImage = styled.img`
  width: 18%;
  height: 50px;
  border-radius: 100%;
  margin-top: 25px;
`;

const Author = styled.h3`
  margin-top: 5px;
  font-size: 15px;
  font-weight: 400;
  color: inherit;
  margin-top: 25px;
`;

const TestimonialText = styled.p`
  font-size: 17px;
  font-weight: 400;
  margin: 5px 0;
  position: relative;

  span {
    justify-content: center;
    color: black;
  }
`;

const Testimonial = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext(); // Move to the next slide
      }
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <Container>
      <h1>Happy clients</h1>
      <Swiper
        onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)} // Specify the type for swiper
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)} // Explicitly define type for swiper
        style={{ width: '100%', height: '400px' }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard isActive={index === activeIndex}>
              <div><p><FaQuoteLeft /></p></div>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <div>
                <TestimonialImage src={testimonial.image} alt={testimonial.author} />
                <Author>{testimonial.author}</Author>
              </div>
            </TestimonialCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonial;
