import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import styled from 'styled-components';

// Sample data for testimonial cards
const testimonials = [
  {
    id: 1,
    text: 'This product changed my life!',
    author: 'John Doe',
    image: 'path/to/image1.jpg', // Replace with your image path
  },
  {
    id: 2,
    text: 'Absolutely fantastic! Highly recommend.',
    author: 'Jane Smith',
    image: 'path/to/image2.jpg', // Replace with your image path
  },
  {
    id: 3,
    text: 'A must-have for everyone!',
    author: 'Alice Johnson',
    image: 'path/to/image3.jpg', // Replace with your image path
  },
];

const Container = styled.div`
  padding: 40px;
  text-align: center;
`;

const TestimonialCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  &.blur {
    filter: blur(2px);
    opacity: 0.5;
  }
`;

const TestimonialImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Author = styled.h3`
  margin-top: 10px;
  font-size: 1.2rem;
  color: #283e7e;
`;

const Testimonial = () => {
  return (
    <Container>
      <h1>Testimonials</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        style={{ height: '400px' }} // Adjust height as necessary
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard className={index === 1 ? '' : 'blur'}>
              <TestimonialImage src={testimonial.image} alt={testimonial.author} />
              <p>{testimonial.text}</p>
              <Author>{testimonial.author}</Author>
            </TestimonialCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Testimonial;
