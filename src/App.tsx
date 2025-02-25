import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Discover from "./components/Discover";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Testimonial from "./components/Testimonial";



const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Discover />
      <About />
      <Blogs />
      <Testimonial />
      
    </>
  );
};

export default App;
