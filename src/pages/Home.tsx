import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Hero from "../components/Hero"
import Discover from "../components/Discover"
import About from "../components/About"
import Blogs from "../components/Blogs"
import Testimonial from "../components/Testimonial"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const HomeContainer = styled.div`
  // Optional: Adjust padding as needed
`;
const Home: React.FC = () => {
  return (
    <HomeContainer id="home">
      <Header />
      <Hero />
      <Discover />
      <About />
      <Blogs />
      <Testimonial />
      <Contact />
      <Footer />
      
    </HomeContainer>
  );
};

export default Home;
