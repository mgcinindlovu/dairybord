import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import styled from 'styled-components';
import image2 from "../assets/Rectangle 4-1.jpg";
import image3 from "../assets/Rectangle 4-2.jpg";
import image4 from "../assets/Rectangle 4.jpg";
import image1 from "../assets/Rectangle 4.jpg";

// Sample data for blog cards
const blogPosts = [
  {
    id: 1,
    title: 'Dairy Kitchen Delights',
    description: '5 recipes you have to try based on our dairy products!',
    image: image1,
    link: '/blog/1',
  },
  {
    id: 2,
    title: 'From cow to kitchen',
    description: '5 surprising uses for fresh milk for those who love milk!',
    image: image2,
    link: '/blog/2',
  },
  {
    id: 3,
    title: 'Growing Strong',
    description: 'How a glass of milk helps your child thrive!',
    image: image3,
    link: '/blog/3',
  },
  {
    id: 4,
    title: 'Blog Post 4',
    description: 'Description for blog post 4',
    image: image4,
    link: '/blog/4',
  },
  // Add more blog posts as needed
];

const Container = styled.div`
  margin-top: 18%;
  padding: 30px;
  text-align: left;
  font-family: "Marhey";

  h1 {
    font-size: 48px;
    font-weight: 400;
    margin-left: 1%;
  }

  @media (max-width: 768px) {
    margin-top: 200%;
    padding: 20px;
    h1 {
      font-size: 32px; /* Reduced font size for smaller screens */
    }
  }
`;

const BlogCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #283e7e;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Reduced font size for smaller screens */
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Reduced font size for smaller screens */
  }
`;

const LinkButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
  border-radius: 50px;
  text-decoration: underline;
  transition: background-color 0.3s;

  &:hover {
    color: #1e2c5d;
  }

  @media (max-width: 768px) {
    font-size: 14px; /* Reduced font size for smaller screens */
  }
`;

const Blogs = () => {
  return (
    <Container>
      <h1>Our Latest <br /> News</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={1} // Default slides per view is 1 for mobile
        loop={true}
        pagination={{ clickable: true }}
        navigation 
        grabCursor={true} // Enables grabbing cursor for better user experience
        breakpoints={{
          768: {
            slidesPerView: 2, // 2 slides on medium screens
          },
          1024: {
            slidesPerView: 3.5, // 3.5 slides on larger screens
          },
          1200: {
            slidesPerView: 3.5, // 4 slides on extra-large screens
          },
        }}
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <BlogCard>
              <BlogImage src={post.image} alt={post.title} />
              <Title>{post.title}</Title>
              <Description>{post.description}</Description>
              <LinkButton href={post.link}>Read More</LinkButton>
            </BlogCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Blogs;
